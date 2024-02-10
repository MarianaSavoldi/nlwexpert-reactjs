import { ChangeEvent, useState } from 'react';
import logo from './assets/logo-nlw-expert.svg';
import { NewNoteCard } from './components/NewNoteCard';
import { NoteCard } from './components/NoteCard';

interface Note {
  id: string;
  date: Date;
  content: string;
}

export function App() {
  const [search, setSearch] = useState('');
  const [notes, setNotes] = useState<Note[]>(() => {
    const notesOnStorage = localStorage.getItem('notes');

    if (notesOnStorage) {
      return JSON.parse(notesOnStorage);
    }

    return [];
  });

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const inputQuery = event.target.value;
    setSearch(inputQuery);
  };

  const onCreateNewNote = (content: string) => {
    const newNote = {
      id: crypto.randomUUID(),
      date: new Date(),
      content,
    };

    const notesArray = [newNote, ...notes];

    setNotes(notesArray);
    localStorage.setItem('notes', JSON.stringify(notesArray));
  };

  const filteredNotes = search !== ''
    ? notes.filter(note => note.content.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    : notes;

  return (
    <div className='mx-auto max-w-6xl my-12 space-y-6'>
      <img src={ logo } alt="NLW Expert Logo" />
      <form className='w-full'>
        <input
          className='w-full bg-transparent text-3xl font-semibold tracking-tight placeholder:text-slate-500 outline-none'
          type="text"
          placeholder='Busque em suas notas...'
          onChange={ handleSearch }
        />
      </form>
      <div className='h-px bg-slate-700' />
      <div className='grid grid-cols-3 auto-rows-[250px] gap-6'>
        <NewNoteCard onCreateNewNote={ onCreateNewNote } />
        { filteredNotes.map(note => <NoteCard key={ note.id } note={ note } />) }
      </div>
    </div>
  );
}
