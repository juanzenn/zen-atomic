import Text from './components/Text/Text'

function App() {
  return (
    <>
      <Text tag='h1'>Text</Text>
      <Text tag='h2'>Text</Text>
      <Text tag='h3'>Text</Text>
      <Text tag='h4'>Text</Text>
      <Text tag='h5'>Text</Text>
      <Text tag='h6'>Text</Text>
      <Text tag='base'>Text</Text>
      <Text tag='small'>Text</Text>

      <section className='px-4 w-scree h-screen bg-green-400 flex flex-col justify-center items-center text-center'>
        <Text tag='h1'>Hello World</Text>
        <Text tag='h3'>This is my first real library (question mark)</Text>
        <Text>The big idea of the Text component is to make a reusable tag with reusable styles since Tailwind doesn't have any default</Text>
      </section>
    </>

  );
}

export default App;
