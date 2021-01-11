import React, {
  useEffect, useState,
} from 'react';
import { useSelector } from 'react-redux';

import {
  CheckCircleIcon, ColDef, DataGrid, RowsProp, ValueFormatterParams,
} from '@material-ui/data-grid';
import { FiberManualRecord } from '@material-ui/icons';

import { useAppDispatch } from 'src/hooks/useAppDispatch';
import { RootState } from 'src/store';
import { fetchAllTodos } from 'src/store/ducks/todos';

function isCompleted(value: boolean) {
  return (value) ? <CheckCircleIcon /> : <FiberManualRecord />;
};

const cols: ColDef[] = [
  { field: 'id', headerName: 'ID', flex: 0.5 },
  { field: 'title', headerName: 'Título', width: 800 },
  {
    field: 'completed',
    headerName: 'Concluído?',
    width: 150,
    renderCell: (params: ValueFormatterParams) => (
      <strong>
        {isCompleted(params.value as boolean)}
      </strong>
    ),
  },
];
const Home: React.FC = () => {
  const [dataRows, setDataRows] = useState<RowsProp>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { status } = useSelector((state: RootState) => state.todos);
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetchData() {
      const todosReturn = await dispatch(fetchAllTodos());

      if (fetchAllTodos.fulfilled.match(todosReturn)) {
        const todos = todosReturn.payload;
        setDataRows(todos);
      }
    }
    setLoading(true);
    fetchData();

    setLoading(false);
  }, [dispatch]);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={dataRows}
        columns={cols}
        loading={loading}
      />
    </div>
  );
};

export default Home;
