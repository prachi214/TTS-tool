
import { Text, Card } from '@mantine/core';



export function AboutCard() {




  return (
    <>


<div className=" w-[90vw] sm:w-[60vw] flex flex-col  m-32 items-center  justify-center space-y-8 border-4 border-b-cyan-100 rounded-br-lg p-8 rounded-t-lg transition-transform duration-300ms ease-in-out hover:!scale-[1.02] hover:!shadow-[0_0_10px_1px_#e7f52c] md:max-w-2xl md:m-10 ">
 


<h1 className='text-4xl font-bold text-center text-white '>About TTS</h1>
 <Card shadow="sm" padding="lg" radius="md" withBorder>
   <Card.Section>

      <div className='text-slate-50'>
       <Text  c="dimmed" className='!text-white-500' size='lg'>
       Text-to-speech tool, or TTS, will read the text of documents and web pages aloud. Most have different voice options to choose from, and allow you to customize the speed and pitch of the voice. They can also highlight the word currently being read, allowing users to follow along visually
       </Text>
      </div>

   
   </Card.Section>
 </Card>

</div>


  </>

  );
}
