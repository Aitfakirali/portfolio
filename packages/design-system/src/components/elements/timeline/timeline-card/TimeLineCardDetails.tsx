import { ReactNode } from 'react';

import { Badge } from '../../badge/Badge';
import { SelectedFile } from '../../form-elements/inputFile/SelectedFiles';
import { NormalizedDocument } from '../../form-elements/inputFile/types';
import { Text } from '../../typography/Text';

// import { FilesDisplay } from '../components/FilesDisplay';

interface TimeLineCardDetailProps {
  /**
   * detail libelle
   */
  libelle: string;
  /**
   *  detail value
   */
  value: string;
  /**
   *  detail's actions
   */
  actions?: string[];
  /**
   *  detail's files type
   */
  documents?: Array<NormalizedDocument>;
  /**
   *  actions widget's map
   */
  actionsMapping?: Record<string, ReactNode>;
  /**
   * details badge
   */
  tag?: string;
}

export const TimeLineCardDetail = ({
  libelle,
  value,
  documents,
  actions = [],
  actionsMapping,
  tag,
}: TimeLineCardDetailProps) => {
  return (
    <div>
      <div className='flex flex-row flex-wrap gap-1'>
        <Text variant='text-base/Medium' className='flex items-center'>
          {libelle} {libelle && value && ':'}
        </Text>
        <Text
          variant='text-base/Medium'
          className='flex items-center text-black'
        >
          {value}
        </Text>
        {actions.map((action) => actionsMapping?.[action])}
        {tag && <Badge label={tag} variant='success' />}
      </div>

      {!!documents?.length && (
        <div className='my-4 flex flex-col gap-4 rounded-lg border border-gray-200 bg-gray-50 p-4'>
          {documents.map((file: NormalizedDocument, index) => (
            <SelectedFile key={index} {...file} isNew={false} />
          ))}
        </div>
      )}
    </div>
  );
};
