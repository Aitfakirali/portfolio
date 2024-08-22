import { render } from '@testing-library/react';
import React from 'react';

import { ClientInfo } from '../ClientInfo';
import { CardObj } from '../types';

describe('ClientInfo', () => {
  it('Should render', () => {
    render(
      <ClientInfo
        cardObjects={cardObjects}
        showLayer={true}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        setShowLayer={() => {}}
      />,
    );
  });
});

const cardObjects: CardObj[] = [
  {
    title: {
      title: 'Information client ',
      idIcone: 'add',
    },
    itemBlocks: [
      {
        elements: [
          {
            title: {
              title: 'Nom complet',
              idIcone: 'add',
            },
            elements: [
              {
                label: 'Amina Benjelloun',
              },
            ],
          },
          {
            title: {
              title: 'N° de téléphone',
              idIcone: 'call',
            },
            elements: [
              {
                label: '06 73 92 83 29',
              },
            ],
          },
        ],
      },
      {
        elements: [
          {
            title: {
              title: 'cin',
              idIcone: 'card',
            },
            elements: [
              {
                label: '9378N3',
              },
            ],
          },
          {
            title: {
              title: 'ville',
              idIcone: 'location',
            },
            elements: [
              {
                label: 'Casablanca',
              },
            ],
          },
          {
            title: {
              title: 'Intermédiaire',
              idIcone: 'user-octagon',
            },
            elements: [
              {
                label: 'RDFM SARL',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: {
      title: 'Information Véhicule',
      idIcone: 'car',
    },
    itemBlocks: [
      {
        elements: [
          {
            title: {
              title: 'Marque',
              idIcone: 'car',
            },
            elements: [
              {
                label: 'Merdeces Benz',
              },
            ],
          },
          {
            title: {
              title: 'Usage',
              idIcone: 'add',
            },
            elements: [
              {
                label: 'Tourisme',
              },
            ],
          },
          {
            title: {
              title: 'Immatriculation',
              idIcone: 'card',
            },
            elements: [
              {
                label: 'xxxxxx-A-06',
              },
            ],
          },
          {
            title: {
              title: 'N° de permis',
              idIcone: 'location',
            },
            elements: [
              {
                label: 'xxxxxx-A-06',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: {
      title: 'Garanties',
      idIcone: 'add',
    },
    itemBlocks: [
      {
        title: 'Garantie de base',
        elements: [
          {
            title: {
              title: 'Responsabilité civile',
              idIcone: 'add',
            },
            elements: [
              {
                label: 'Franchise',
                description: '5%',
              },
              {
                label: 'Capital',
                description: '10.000 MAD',
              },
            ],
          },
          {
            title: {
              title: 'PCA',
              idIcone: 'add',
            },
            elements: [
              {
                label: 'Franchise',
                description: '5%',
              },
              {
                label: 'Capital',
                description: '10.000 MAD',
              },
            ],
          },
          {
            title: {
              title: 'Défense et recours',
              idIcone: 'add',
            },
            elements: [
              {
                label: 'Franchise',
                description: '5%',
              },
              {
                label: 'Capital',
                description: '10.000 MAD',
              },
            ],
          },
        ],
      },
      {
        title: 'Garantie contractuelles',
        elements: [
          {
            title: {
              title: 'Incendie',
              idIcone: 'add',
            },
            elements: [
              {
                label: 'Franchise',
                description: '5%',
              },
              {
                label: 'Capital',
                description: '10.000 MAD',
              },
            ],
          },
          {
            title: {
              title: 'Vol',
              idIcone: 'add',
            },
            elements: [
              {
                label: 'Franchise',
                description: '5%',
              },
              {
                label: 'Capital',
                description: '10.000 MAD',
              },
            ],
          },
          {
            title: {
              title: 'Bris de Glaces',
              idIcone: 'add',
            },
            elements: [
              {
                label: 'Franchise',
                description: '5%',
              },
              {
                label: 'Capital',
                description: '10.000 MAD',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: {
      title: 'Sinitre',
      idIcone: 'car',
    },
    itemBlocks: [
      {
        elements: [
          {
            title: {
              title: 'N° de déclaration',
              idIcone: 'clock',
            },
            elements: [
              {
                label: '202239019301039',
              },
            ],
          },
          {
            title: {
              title: 'N° du sinistre',
              idIcone: 'clock',
            },
            elements: [
              {
                label: '123938193837',
              },
            ],
          },
          {
            title: {
              title: 'Statut gestion',
              idIcone: 'clock',
            },
            elements: [
              {
                label: 'Règlement effectué',
              },
            ],
          },
          {
            title: {
              title: 'Statut ',
              idIcone: 'clock',
            },
            elements: [
              {
                label: 'Ouverture',
              },
            ],
          },
          {
            title: {
              title: 'Nature dossier',
              idIcone: 'clock',
            },
            elements: [
              {
                label: 'Materiel',
              },
            ],
          },
          {
            title: {
              title: 'Immatriculation adverse',
              idIcone: 'clock',
            },
            elements: [
              {
                label: '--',
              },
            ],
          },
          {
            title: {
              title: 'Cie adverse',
              idIcone: 'clock',
            },
            elements: [
              {
                label: '--',
              },
            ],
          },
          {
            title: {
              title: 'Taux reponsabilité',
              idIcone: 'clock',
            },
            elements: [
              {
                label: '0.0',
              },
            ],
          },
        ],
      },
    ],
  },
];
