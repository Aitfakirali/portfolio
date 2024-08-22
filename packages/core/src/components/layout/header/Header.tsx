import { Icon, Image, Text, vclsx } from '@portfolio/ui';
import { useTheme } from 'next-themes';
import { useState } from 'react';
import { Listbox, Transition, Dialog } from '@headlessui/react';
import { Menu } from '../sidebar/SideBar';
import { secondItems, items as menuItems } from '../sidebar/mock-data';

export const Header = ({
  show,
  handleShow,
}: {
  show: boolean;
  handleShow: () => void;
}) => {
  const { theme, setTheme } = useTheme();
  return (
    <div className='fixed top-0 z-20 xl:gap-10 flex w-full items-center gap-4 border-b border-gray-100 dark:border-gray-800 bg-white px-6 py-4 lg:gap-6 dark:bg-[#181818]'>
      <div>
        <Image
          src='/branding.png'
          alt=''
          width={220}
          height={70}
          className='w-[188px] md:w-[220px] dark:hidden'
        />
        <Image
          src='/branding-dark.png'
          alt=''
          width={220}
          height={70}
          className='w-[188px] md:w-[220px] hidden dark:block'
        />
      </div>
      <div className='gap-5 items-center flex-1 hidden md:flex'>
        <button onClick={handleShow} className='text-primary'>
          <Icon id={show ? 'menu' : 'open'} className='w-7 h-7' />
        </button>

        <Select />
        <Autocomplete />
      </div>

      <div className='block md:hidden flex-1'>
        <Select />
      </div>

      <MobileMenu />

      <div className='items-center gap-4 hidden md:flex'>
        <Image alt='' src={'/lang.png'} width={20} height={20} />
        <button className='relative'>
          <Icon id='notification' className='w-6 h-6' />
          <span className='bg-primary p-1 absolute -top-2 w-5 h-5 -right-2 flex items-center justify-center text-white text-sm rounded-full'>
            2
          </span>
        </button>
        <button>
          <Icon id='message' className='w-6 h-6' />
        </button>
      </div>

      <div className='items-center gap-4 hidden md:flex'>
        <div className='flex-shrink-0'>
          <Image width={48} height={48} src='/images/Picture-5.png' alt='' />
        </div>

        <button className='flex gap-2 w-fit items-center text-black dark:text-white'>
          <Text variant='text-base/Semibold' className='w-max'>
            Mon espace
          </Text>
          <Icon id='arrow-down' className='w-4 h-4' />
        </button>

        <button
          onClick={() => setTheme(theme == 'dark' ? 'light' : 'dark')}
          className='flex gap-2 w-fit items-center text-black dark:text-white'
        >
          <Text variant='text-base/Semibold' className='w-max'>
            Thème
          </Text>
          <Icon
            id={theme === 'dark' ? 'theme-dark' : 'theme'}
            className='w-5 h-5'
          />
        </button>
      </div>
    </div>
  );
};

const MobileMenu = () => {
  const [isShown, setShown] = useState(false);
  return (
    <>
      {isShown ? (
        <button
          onClick={() => setShown(false)}
          className='md:hidden text-primary'
        >
          <Icon id={'close'} className='w-10 h-10' />
        </button>
      ) : (
        <button
          onClick={() => setShown(true)}
          className='md:hidden text-primary'
        >
          <Icon id={'menu'} className='w-10 h-10' />
        </button>
      )}

      <Transition show={isShown} as='div' className='fixed'>
        <Dialog onClose={() => setShown(false)} className='relative z-50'>
          <Transition.Child
            as='div'
            enter='transform transition ease-in-out duration-300 sm:duration-500'
            enterFrom='transform translate-x-full'
            enterTo=''
            leave='transform transition ease-in-out duration-300 sm:duration-500'
            leaveFrom=''
            leaveTo='transform translate-x-full'
            className={vclsx(
              'fixed bottom-0 left-0 top-[73px] w-full min-w-screen h-full min-h-screen',
            )}
          >
            {/* The actual dialog panel  */}
            <Dialog.Panel
              className={vclsx(
                'mx-auto w-full max-w-full h-full overflow-auto bg-white dark:bg-[#181818] ',
              )}
            >
              <Text
                variant='text-lg/Semibold'
                className='px-5 py-2 mb-4 text-gray-800 dark:text-white'
              >
                Mon Groupe
              </Text>

              <Menu className='max-w-full' items={menuItems} />

              <Text
                variant='text-lg/Semibold'
                className='px-5 py-2 my-4 text-gray-800 dark:text-white'
              >
                Mon entité
              </Text>

              <Menu className='max-w-full' items={secondItems} />
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
};

const Autocomplete = () => {
  return (
    <div className='hidden lg:flex items-center bg-gray-50 dark:bg-black rounded-full w-full p-2'>
      <input
        placeholder='Rechercher'
        className='w-full overflow-hidden dark:bg-black dark:placeholder-gray-200 dark:text-gray-200 bg-gray-50 border-none p-1 px-2 text-base font-medium text-gray-700 ring-0 placeholder:text-ellipsis placeholder:whitespace-nowrap placeholder:font-normal placeholder:text-gray-600 focus:outline-none focus:ring-0 disabled:cursor-not-allowed '
      />
      <button className='group inline-flex dark:text-gray-200 items-center justify-center rounded-full p-2 text-gray-700'>
        <Icon id='search-normal' className='h-5 w-5' />
      </button>
    </div>
  );
};

const items = [
  { id: 1, name: 'Attijari Factoring' },
  { id: 2, name: 'Bank Assafa Wafa' },
  { id: 3, name: 'IMA Assistance' },
  { id: 4, name: 'Attijari Finances Corp.' },
  { id: 5, name: 'Wafa Immobilier' },
  { id: 6, name: 'Attijari Global Research' },
  { id: 7, name: 'Wafa Assurance' },
  { id: 8, name: 'Wafa LLD' },
  { id: 9, name: 'Attijari Intermédiation' },
  { id: 10, name: 'Wafa Bourse' },
  { id: 11, name: 'Wafabail' },
];

const Select = () => {
  const [selectedItem, setSelectedItem] = useState(items[0]);

  return (
    <div className='relative'>
      <Listbox value={selectedItem} onChange={setSelectedItem}>
        <Listbox.Button className='text-nowrap flex gap-2 w-fit items-center text-black dark:text-white'>
          <Text variant='text-base/Semibold' className='w-max'>
            Nos Filiales
          </Text>
          <Icon id='arrow-down' className='w-4 h-4' />
        </Listbox.Button>
        <Transition
          className='absolute bg-white dark:bg-[#181818] w-full -top-3 z-10 min-w-[348px] rounded-s-lg rounded-e-2xl shadow-md'
          enter='transition duration-100 ease-out'
          enterFrom='transform scale-95 opacity-0'
          enterTo='transform scale-100 opacity-100'
          leave='transition duration-75 ease-out'
          leaveFrom='transform scale-100 opacity-100'
          leaveTo='transform scale-95 opacity-0'
        >
          <Listbox.Option
            className='px-4 py-3 list-none border-b font-semibold border-gray-100 dark:border-gray-800'
            value={{}}
          >
            Nos Filiales
          </Listbox.Option>
          <Listbox.Options className='w-full space-y-3 px-4 py-3'>
            {items.map((person) => (
              <Listbox.Option
                className='cursor-pointer hover:text-primary transition-all duration-200'
                key={person.id}
                value={person}
              >
                {({ selected }) => (
                  <Text className={vclsx(selected && 'text-primary font-bold')}>
                    {person.name}
                  </Text>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  );
};
