import { useMemo } from "react";

import {
  usePagination,
  useTable,
  useGlobalFilter,
  useFilters,
  useRowSelect,
} from "react-table";

import E_Mall_DATA from "../../assets/data/data.json";
import { COLUMNS as E_Mall_Columns } from "./tableData/e_mall_columns";
import GlobalFilter from "./GlobalFilter";
import ColumnFilter from "./ColumnFilter";
import { Checkbox } from "./Checkbox";
import { Container } from "./Client.Style";

const RowSelection = () => {
  const columns = useMemo(() => E_Mall_Columns, []);
  const data = useMemo(() => E_Mall_DATA, []);

  const defaultColumn = useMemo(() => {
    return {
      Filter: ColumnFilter,
    };
  }, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    prepareRow,
    gotoPage,
    pageCount,
    setPageSize,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
    },
    useFilters,
    useGlobalFilter,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        return [
          {
            id: "selection",
            Header: ({ getToggleAllPageRowsSelectedProps }) => (
              <Checkbox {...getToggleAllPageRowsSelectedProps()} />
            ),
            Cell: ({ row }) => (
              <Checkbox {...row.getToggleRowSelectedProps()} />
            ),
          },
          ...columns,
        ];
      });
    }
  );

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <Container>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />

      {/* Tabla de clientes */}
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  {column.render("Header")}
                  <div>{column.canFilter ? column.render("Filter") : null}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Paginacion */}
      <div className="flex__center">
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>

        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>

        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Anterior
        </button>

        <p className="goto">
          <span>
            Page <b>{pageIndex + 1}</b> of {pageOptions.length}
          </span>

          <span>
            {" "}
            | go to Page:{" "}
            <input
              type="number"
              min={0}
              max={pageCount}
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const pageNumber = e.target.value
                  ? Number(e.target.value) - 1
                  : 0;
                gotoPage(pageNumber);
              }}
            />
          </span>
        </p>

        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Siguiente
        </button>

        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>
      </div>

      {/* Las filas seleccionadas */}
      {/* <pre>
        <code>
          {JSON.stringify(
            {
              selectedFlatRows: selectedFlatRows.map((row) => row.original),
            },
            null,
            2
          )}
        </code>
      </pre> */}
    </Container>
  );
};

export default RowSelection;
