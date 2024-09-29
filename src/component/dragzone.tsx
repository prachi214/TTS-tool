import { useState } from 'react';

import { Group, Text, Card,rem } from '@mantine/core';
import { CopyButton, Button } from '@mantine/core';
import { IconUpload, IconPhoto, IconX } from '@tabler/icons-react';
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import Tesseract from 'tesseract.js';


export function Dragger(props: Partial<DropzoneProps>) {
  const [text, setText] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleDrop = (files: File[]) => {
    if (files.length > 0) {
      const image = files[0];
      setLoading(true);
      Tesseract.recognize(image, 'eng', {
        logger: (m) => console.log(m), 
      })
        .then(({ data: { text } }) => {
          setText(text);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Tesseract error:', error);
          setLoading(false);
        });
    }
  };

  return (
    <>


<div className=" w-[90vw] sm:w-[60vw] flex flex-col  m-32 items-center  justify-center space-y-8 border-4 border-b-cyan-100 rounded-br-lg p-8 rounded-t-lg transition-transform duration-300ms ease-in-out hover:!scale-[1.02] hover:!shadow-[0_0_10px_1px_#e7f52c] md:max-w-2xl md:m-10 ">
 
 <Card shadow="sm" padding="lg" radius="md" withBorder className='border-2 border-indigo-500/100 rounded-lg p-8 cursor-pointer delay-150 mt-4 text-white md:flex'>
   <Card.Section>
     <Dropzone
       onDrop={handleDrop}
       onReject={(files) => console.log('rejected files', files)}
       maxSize={5 * 1024 ** 2}
       accept={IMAGE_MIME_TYPE}
       {...props}
     >
       <Group justify="center" gap="xl" mih={220} style={{ pointerEvents: 'none' }}>
         <Dropzone.Accept>
           <IconUpload
             style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-blue-6)' }}
             stroke={1.5}
           />
         </Dropzone.Accept>
         <Dropzone.Reject>
           <IconX
             style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-red-6)' }}
             stroke={1.5}
           />
         </Dropzone.Reject>
         <Dropzone.Idle>
           <IconPhoto
             style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-dimmed)' }}
             stroke={1.5}
           />
         </Dropzone.Idle>

         <div>
           <Text size="4xl" inline>
             Drag images here or click to select files
           </Text>
           <Text size="xl" c="dimmed" inline mt={7}>
             Attach as many files as you like, <span className='text-red-400'>each file should not exceed 5mb</span>
           </Text>
         </div>
       </Group>
     </Dropzone>
   </Card.Section>
 </Card>


 <Card shadow="sm" padding="lg" radius="md" withBorder>
   <Card.Section>
     {loading ? (
       <Text className="text-yellow-200">
         Processing image...
       </Text>
     ) : text ? (
       <div className='text-white text-center font-bold'>
         <Text  size="lg"  mb="md" className='text-yellow-300 text-bold pb-2'>
           Extracted Text
         </Text>


         <Text>
          <div className='pb-4'>
          {text}
          </div>
          {/* {text} */}
          {/* <br /> */}
          <span className='text-yellow-300 border-solid border-2 border-green-500 rounded-lg p-2'>
          <CopyButton value={text} >
      {({ copied, copy }) => (
        <Button color={copied ? 'blue' : 'white'} onClick={copy} >
          {copied ? 'Copied text' : 'Copy text'}
        </Button>
      )}
    </CopyButton>
          </span>


         </Text>
       </div>
     ) : (
      <div className='text-slate-50'>
       <Text  c="dimmed" className='!text-white-500' size='lg'>
         No text extracted yet. Upload an image to see the extracted text here.
       </Text>
      </div>

     )}
   </Card.Section>
 </Card>

</div>


  </>

  );
}
