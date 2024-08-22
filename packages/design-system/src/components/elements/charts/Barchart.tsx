import { AxisBottom } from '@visx/axis';
import { Group } from '@visx/group';
import { LegendOrdinal } from '@visx/legend';
import { scaleBand, scaleLinear, scaleOrdinal } from '@visx/scale';
import { BarGroup } from '@visx/shape';
import { timeFormat, timeParse } from '@visx/vendor/d3-time-format';

import { theme } from './theme';
import { Text } from '../typography/Text';

export type BarGroupProps<T> = {
  /**
   *
   */
  data: T[];
  /**
   *
   */
  variant?: keyof typeof theme;
  /**
   *
   */
  width: number;
  /**
   *
   */
  height: number;
  /**
   *
   */
  margin?: {
    /**
     *
     */
    top: number;
    /**
     *
     */
    /**
     *
     */
    right: number;
    /**
     *
     */
    /**
     *
     */
    bottom: number;
    /**
     *
     */
    /**
     *
     */
    left: number;
  };
  /**
   *
   */
  events?: boolean;
};

const defaultMargin = { top: 100, right: 0, bottom: 40, left: 0 };

export const getMinAndMax = (d: any) => {
  const values = [];
  let YMin = 0;
  let YMax = 0;
  for (const element of d) {
    for (const key in element) {
      if (isNaN(element[key])) continue;
      values.push(element[key]);
    }
  }
  YMin = Math.min(...values);
  YMax = Math.max(...values);
  return [YMin, YMax];
};

const parseDate = timeParse('%Y-%m-%d');
const format = timeFormat('%Y');
const formatDate = (date: string) => format(parseDate(date) as Date);

const getDate = (d: any) => d.date;

export const BarChart = <
  T extends {
    /**
     *
     */
    date: string;

    [key: string]: string | number;
  },
>({
  data = [],
  variant = 'default',
  width,
  height,
  events = false,
  margin = defaultMargin,
}: BarGroupProps<T>) => {
  // bounds
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  const keys = Object.keys(data?.[0]).filter((key) => key !== 'date');

  const labelsScale = scaleBand<string>({
    domain: keys,
    paddingInner: 0.1,
  });

  const dateScale = scaleBand<string>({
    domain: data.map(getDate),
    padding: 0.4,
  });

  const [_yMin, _yMax] = getMinAndMax(data);

  const tempScale = scaleLinear<number>({
    domain: [_yMin, _yMax],
    round: true,
  });

  // update scale output dimensions
  dateScale.rangeRound([0, xMax]);
  labelsScale.rangeRound([0, dateScale.bandwidth()]);
  tempScale.rangeRound([_yMax - 100, -100]);

  const {
    background,
    barPrimary,
    barSecondary,
    barOutline,
    barStrokeOutlineColor,
  } = theme[variant];

  const colorScale = scaleOrdinal<string, string>({
    domain: keys,
    range: [barSecondary, barPrimary, barOutline],
  });

  return width < 10 ? null : (
    <div
      style={{
        background,
      }}
      className='flex w-full max-w-fit flex-col gap-y-3 p-4'
    >
      <Text variant='text-sm/Regular'>
        <LegendOrdinal
          scale={colorScale}
          direction='column'
          labelMargin='0 0 0 0'
          shapeStyle={({ text }) => {
            const hasStroke = text == 'Cumul rachats';
            return {
              borderRadius: 3,
              ...(hasStroke
                ? {
                    borderWidth: 1,
                    borderColor: barStrokeOutlineColor,
                    borderStyle: 'dashed',
                  }
                : {}),
            };
          }}
        />
      </Text>
      <svg width={width} height={height}>
        <rect
          x={0}
          y={0}
          width={width}
          height={height}
          fill={background}
          rx={14}
        />

        <Group top={margin.top} left={margin.left}>
          <BarGroup
            data={data}
            keys={keys}
            height={yMax}
            x0={getDate}
            x0Scale={dateScale}
            x1Scale={labelsScale}
            yScale={tempScale}
            color={colorScale}
          >
            {(barGroups) =>
              barGroups.map((barGroup) => (
                <Group
                  key={`bar-group-${barGroup.index}-${barGroup.x0}`}
                  left={barGroup.x0}
                >
                  {barGroup.bars.map((bar) => {
                    const hasStroke = bar.key == 'Cumul rachats';
                    return (
                      <rect
                        key={`bar-group-bar-${barGroup.index}-${bar.index}-${bar.value}-${bar.key}`}
                        x={bar.x}
                        y={bar.y}
                        width={bar.width}
                        height={bar.height}
                        fill={bar.color}
                        rx={4}
                        strokeWidth={1}
                        stroke={
                          hasStroke ? barStrokeOutlineColor : 'transparent'
                        }
                        strokeDasharray={2}
                        onClick={() => {
                          if (!events) return;
                          const { key, value } = bar;
                          alert(JSON.stringify({ key, value }));
                        }}
                      />
                    );
                  })}
                </Group>
              ))
            }
          </BarGroup>
        </Group>
        <AxisBottom
          top={yMax + margin.top}
          tickFormat={formatDate}
          scale={dateScale}
          stroke={barPrimary}
          tickStroke={barPrimary}
          hideAxisLine
          hideTicks
          tickLabelProps={{
            fontSize: 11,
            textAnchor: 'middle',
          }}
        />
      </svg>
    </div>
  );
};
