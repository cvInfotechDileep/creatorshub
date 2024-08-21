// import { toggleTheme } from '@/store/themeSlice';
// import { useDispatch, useSelector } from 'react-redux';


// export default function ThemeToggle() {
//   const dispatch = useDispatch();
//   const theme = useSelector((state) => state.theme.theme);

//   const handleToggle = () => {
//     dispatch(toggleTheme());
//   };

//   return (
//     <button onClick={handleToggle}>
//       Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
//     </button>
//   );
// }


import { toggleTheme } from '@/redux/slices/themeSlice';
import { useDispatch, useSelector } from 'react-redux';


export default function ThemeToggle() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <button className={theme} onClick={handleToggle}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
}
