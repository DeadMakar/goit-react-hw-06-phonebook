import { useDispatch, useSelector } from 'react-redux';
import { StyledSearchFilter, ContactTitle } from './SearchFilter.styled';
import { changeFilter } from 'redux/filterSlice';

export const SearchFilter = () => {
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <>
      <ContactTitle>Contacts</ContactTitle>
      <StyledSearchFilter>
        <h2>Search contacts</h2>
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={handleChange}
        />
      </StyledSearchFilter>
    </>
  );
};
