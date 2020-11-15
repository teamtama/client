import React, { FunctionComponent, useEffect, useMemo, useRef } from 'react';
import dynamic from 'next/dynamic';
import useResizeFileToBlob from '../../../utils/hooks/useResizeFileToBlob';
import useUploadImage from '../../../utils/hooks/useUploadImage';
import Typography from '../Typography/Typography';
import { css, useTheme } from '@emotion/react';
import ErrorMessageComponent from '../../molecules/ErrorMessageComponent/ErrorMessageComponent';
import '../../../../node_modules/react-quill/dist/quill.snow.css';

interface OwnProps {
  body: string;
  onChange: (e: any) => void;
  placeholder: string;
  errorMessage?: string;
  label: string;
  required?: boolean;
}

type Props = OwnProps;

const ReactQuill = dynamic(
  async () => {
    const { default: RQ } = await import('react-quill');

    return ({ forwardedRef, ...props }: any) => (
      <RQ ref={forwardedRef} {...props} />
    );
  },
  {
    ssr: false,
  },
);

const Quill: FunctionComponent<Props> = ({
  body,
  onChange,
  placeholder,
  errorMessage,
  label,
  required = false,
}) => {
  const { resizeFileToBlob } = useResizeFileToBlob();
  const { uploadImage } = useUploadImage();
  const quillRef = useRef<any>(null);

  const insertToEditor = (url: string) => {
    let quillEditor;
    let range;
    if (null !== quillRef.current) {
      quillEditor = quillRef.current.getEditor();
      range = quillRef.current.unprivilegedEditor.getSelection();
    }
    quillEditor.insertEmbed(range.index, 'image', url);
  };

  const saveToServer = async (file: File) => {
    const blob = await resizeFileToBlob(file);
    const url = await uploadImage({
      filename: 'board-body',
      ext: 'jpeg',
      blob,
    });
    insertToEditor(url);
  };

  const selectLocalImage = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files && input.files[0];
      if (file) {
        await saveToServer(file);
      }
    };
  };

  const QuillFormats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'link',
    'image',
    'video',
    'code-block',
  ];
  const QuillModules = useMemo(
    () => ({
      toolbar: {
        container: [
          [
            { header: '1' },
            { header: '2' },
            { header: [3, 4, 5, 6] },
            { font: [] },
          ],
          [{ size: [] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['link', 'image', 'video'],
          ['clean'],
          ['code-block'],
        ],
        handlers: {
          image: selectLocalImage,
        },
      },
      clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
      },
    }),
    [],
  );

  useEffect(() => {
    const init = (quill: any) => {
      console.info(quill);
    };
    const check = () => {
      if (quillRef.current) {
        init(quillRef.current);
        return;
      }
      setTimeout(check, 200);
    };
    check();
  }, [quillRef]);

  const theme = useTheme();

  return (
    <div>
      <div
        css={css`
          display: flex;
          height: 16px;
          line-height: 16px;
          margin-bottom: ${theme.space * 2}px;
        `}
      >
        <Typography
          css={css`
            align-self: flex-start;
          `}
        >
          {label}
        </Typography>
        {required && (
          <Typography
            color={theme.colors.darkGray}
            css={css`
              align-self: flex-start;
              margin-left: ${theme.space}px;
            `}
          >
            ( REQUIRE )
          </Typography>
        )}
      </div>
      <div
        className={'quill-wrapper'}
        css={css`
          flex: 1;
          border-radius: 4px;
          height: 100%;
          border: 1px solid
            ${errorMessage ? theme.alert.error : theme.colors.lightGray};
          .ql-editor {
            height: 320px;
          }
          .ql-snow {
            border: none;
          }
        `}
      >
        <ReactQuill
          forwardedRef={quillRef}
          theme="snow"
          value={body}
          onChange={onChange}
          modules={QuillModules}
          formats={QuillFormats}
          placeholder={placeholder}
        />
      </div>
      {errorMessage && <ErrorMessageComponent text={errorMessage} />}
    </div>
  );
};

export default Quill;
