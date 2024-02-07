import logo from './assets/logo-nlw-expert.svg';

export function App() {
  return (
    <div className='mx-auto max-w-6xl my-12 space-y-6'>
      <img src={ logo } alt="NLW Expert Logo" />
      <form className='w-full'>
        <input
          className='w-full bg-transparent text-3xl font-semibold tracking-tight placeholder:text-slate-500 outline-none'
          type="text"
          placeholder='Busque em suas notas...'
        />
      </form>
      <div className='h-px bg-slate-700' />
      <div className='grid grid-cols-3 auto-rows-[250px] gap-6'>
        <div className='rounded-md bg-slate-700 p-5 space-y-3'>
          <span className='text-sm font-medium text-slate-200'>Adicionar nota</span>
          <p className='text-sm leading-6 text-slate-400'>
            Grave uma nota em áudio que será convertida para texto automaticamente.
          </p>
        </div>

        <div className='rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative'>
          <span className='text-sm font-medium text-slate-300'>há 2 dias</span>
          <p className='text-sm leading-6 text-slate-400'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum illo doloribus blanditiis ut facere minus itaque, distinctio possimus et nesciunt harum, molestiae inventore facilis praesentium explicabo impedit enim sunt odit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non voluptate atque facilis exercitationem labore? Rerum ipsam pariatur aperiam explicabo veniam molestias, voluptatem ex animi, possimus, atque accusamus itaque recusandae ratione.
          </p>
          <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none' />
        </div>

        <div className='rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative'>
          <span className='text-sm font-medium text-slate-300'>há 4 dias</span>
          <p className='text-sm leading-6 text-slate-400'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim quos, vero, consectetur beatae qui explicabo maiores inventore blanditiis quisquam sit eos voluptatibus sapiente ullam consequuntur. Ducimus laudantium voluptas minus. Deserunt.
          </p>
          <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none' />
        </div>

        <div className='rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative'>
          <span className='text-sm font-medium text-slate-300'>há 4 dias</span>
          <p className='text-sm leading-6 text-slate-400'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloribus fuga sequi hic rem! Eaque illo unde totam? Voluptatibus, neque quaerat. Suscipit adipisci, iusto pariatur ducimus fuga cupiditate autem laboriosam!
          </p>
          <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none' />
        </div>
      </div>
    </div>
  );
}
