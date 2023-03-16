import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import { TextField, Typography, Box } from '@mui/material';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.filter);

  const handleChange = evt => {
    dispatch(setFilter(evt.target.value));
  };

  return (
    <div>
      <Box>
        <TextField
          label="Find contacts by name"
          type="text"
          name="filter"
          value={filter}
          onChange={handleChange}
          variant="filled"
          color="primary"
          fullWidth
          sx={{
            mt: 2,
            border: '1px solid #28627c',
            overflow: 'hidden',
            borderRadius: '5px',
            backgroundColor: '#edf9fe',
          }}
        />
      </Box>
    </div>
  );
};
