import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { act } from 'react-dom/test-utils';

import { InputFile } from '../InputFile';
import { SelectedFile, SelectedFiles } from '../SelectedFiles';
import { NormalizedDocument } from '../types';

const documentTypes = [
  { value: 'Devis', label: 'Devis' },
  { value: 'Contrat', label: 'Contrat' },
  { value: 'Voiture', label: 'Voiture' },
];

global.URL.createObjectURL = jest.fn();

describe('InputFile', () => {
  const handleChange = jest.fn();

  it('should have default value', () => {
    render(
      <InputFile
        documentTypes={documentTypes}
        defaultValue={[
          {
            name: 'IMG-20230524-WA0007.jpg',
            type: 'image',
            documentType: 'Contrat',
            file: 'https://www.orimi.com/pdf-test.pdf',
          },
        ]}
        onChange={handleChange}
      />,
    );
    expect(screen.getByText('IMG-20230524-WA0007.jpg')).toBeInTheDocument();
  });

  it('upload file', async () => {
    render(<InputFile documentTypes={documentTypes} onChange={handleChange} />);
    const uploader = screen.getByTestId('uploader');
    const selectButton = screen.getByTestId('select-button');
    await act(async () => {
      await userEvent.click(selectButton);
    });
    const selectElement = screen.getByText('Devis');
    await act(async () => {
      await userEvent.click(selectElement);
    });
    const file = new File(['file content'], 'chucknorris.png', {
      type: 'image/png',
    });

    await act(async () => {
      await userEvent.upload(uploader, file);
    });

    expect(screen.getByText('chucknorris.png')).toBeInTheDocument();
  });
});

describe('SelectedFiles', () => {
  const handleChange = jest.fn();
  const selectedFiles: NormalizedDocument[] = [
    {
      id: 1233,
      name: 'IMG-20230524-WA0007.jpg',
      type: 'image',
      documentType: 'Contrat',
      isNew: true,
      file: new File(['file content'], 'IMG-20230524-WA0007.jpg', {
        type: 'image/png',
      }),
    },
  ];
  const MyComponent = () => {
    const [state, setState] = useState(selectedFiles);
    return <SelectedFiles selectedFiles={state} setSelectedFiles={setState} />;
  };
  it('should have default value', () => {
    render(
      <SelectedFiles
        selectedFiles={selectedFiles}
        setSelectedFiles={handleChange}
      />,
    );
    expect(screen.getByText('IMG-20230524-WA0007.jpg')).toBeInTheDocument();
  });

  it('should delete file', async () => {
    const { getByTestId } = render(<MyComponent />);
    const deleteButton = getByTestId('delete-button');

    fireEvent.click(deleteButton);

    expect(screen.queryByText('IMG-20230524-WA0007.jpg')).toBeNull();
  });

  const selectedFile: NormalizedDocument = {
    id: 1233,
    name: 'IMG-20230524-WA0007.jpg',
    type: 'image',
    documentType: 'Contrat',
    isNew: false,
    file: new File(['file content'], 'IMG-20230524-WA0007.jpg', {
      type: 'image/png',
    }),
    href: 'https://www.orimi.com/pdf-test.pdf',
  };
  it('should preview in a new tab', () => {
    window.open = jest.fn();
    const { getByTestId } = render(<SelectedFile {...selectedFile} />);
    const previewButton = getByTestId('preview-button');
    fireEvent.click(previewButton);
    expect(window.open).toHaveBeenCalledWith(
      'https://www.orimi.com/pdf-test.pdf',
      '_blank',
    );
  });
});
