import { useState } from 'react';
import logo from './assets/logo-nlw-expert.svg';
import { NewNoteCard } from './components/NewNoteCard';
import { NoteCard } from './components/NoteCard';

interface Note {
  id: string;
  date: Date;
  content: string;
}

export function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  const onCreateNewNote = (content: string) => {
    const newNote = {
      id: crypto.randomUUID(),
      date: new Date(),
      content,
    };

    setNotes([newNote, ...notes]);
  };

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
        <NewNoteCard onCreateNewNote={ onCreateNewNote } />
        { notes.map(note => <NoteCard key={ note.id } note={ note } />) }
      </div>
    </div>
  );
}
