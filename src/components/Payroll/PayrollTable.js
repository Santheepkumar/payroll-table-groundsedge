import React, { useMemo } from "react";
import {
  useTable,
  usePagination,
  useSortBy,
  useFilters,
  useRowSelect,
} from "react-table";

const CustomInput = (props) => {
  const { initialValue, enablecurr } = props;
  return (
    <div>
      <div className='mt-1 relative rounded-md shadow-sm '>
        {enablecurr.view ? (
          <div
            className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none  ${
              enablecurr.style === "bold" ? "font-semibold" : "font-normal"
            }`}>
            AED
          </div>
        ) : null}
        <input
          type='number'
          min='0'
          defaultValue={initialValue}
          className={`block w-32 ${
            enablecurr.view ? "pl-12" : ""
          } sm:text-sm rounded-lg p-2 border border-gray-300 focus:outline-none`}
        />
      </div>
    </div>
  );
};

function sortTypeCaseIgnore(rowA, rowB, columnId) {
  const a = (rowA.values[columnId] || "").toLowerCase();
  const b = (rowB.values[columnId] || "").toLowerCase();

  let result = 0;

  if (a < b) {
    result = -1;
  } else if (a > b) {
    result = 1;
  }

  return result;
}

const DISPLAY_COLUMNS = [
  {
    Header: () => (
      <div className='flex'>
        <svg fill='currentColor' viewBox='0 0 20 20' className='-ml-6 h-8 w-8'>
          <path
            fillRule='evenodd'
            d='M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z'
            clipRule='evenodd'></path>
        </svg>
        <span className='mt-2 ml-2'>Name</span>
      </div>
    ),
    accessor: "name",
    headerClassName:
      "px-6 py-6 w-2/12 bg-red-500 text-left text-md leading-4 font-medium text-white tracking-wider ",
    headerTextClassName: "inline-flex justify-left cursor-pointer",
    cellClassName: "px-6 py-8 align-top leading-5 text-gray-700",
    sortType: sortTypeCaseIgnore,
    Cell: ({ row }) => {
      const original = row.original || {};
      return (
        <div className='text-sm leading-5 text-gray-900'>{original.name}</div>
      );
    },
  },

  {
    Header: () => (
      <div className='flex'>
        <svg fill='currentColor' viewBox='0 0 20 20' className='-ml-6 h-8 w-8'>
          <path
            fillRule='evenodd'
            d='M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z'
            clipRule='evenodd'></path>
        </svg>
        <span className='mt-2 ml-2'>Employee ID</span>
      </div>
    ),
    accessor: "employeeId",
    headerClassName:
      "px-6 py-6 w-2/12  bg-red-500 text-left text-md leading-4 font-medium text-white tracking-wider",
    headerTextClassName: "inline-flex justify-left cursor-pointer",
    cellClassName: "px-6 py-8 align-top leading-5 text-gray-700",
    Cell: ({ row }) => {
      const original = row.original || {};
      return (
        <div className='text-sm leading-5 text-gray-900'>
          {original.employeeId || "--"}
        </div>
      );
    },
  },
  {
    Header: () => (
      <div className='flex'>
        <svg fill='currentColor' viewBox='0 0 20 20' className='-ml-6 h-8 w-8'>
          <path
            fillRule='evenodd'
            d='M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z'
            clipRule='evenodd'></path>
        </svg>
        <span className='mt-2 ml-2'>Total Salary</span>
      </div>
    ),
    accessor: "totalSalary",
    headerClassName:
      "px-6 py-6 w-2/12  bg-red-500 text-left text-md leading-4 font-medium text-white tracking-wider",
    headerTextClassName: "inline-flex justify-left cursor-pointer",
    cellClassName: "px-6 py-4 align-top leading-5 text-gray-700",
    Cell: ({ row }) => (
      <CustomInput
        enablecurr={{ view: true, style: "bold" }}
        initialValue={row.original.totalSalary}
      />
    ),
  },
  {
    Header: () => (
      <div className='flex'>
        <svg fill='currentColor' viewBox='0 0 20 20' className='-ml-6 h-8 w-8'>
          <path
            fillRule='evenodd'
            d='M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z'
            clipRule='evenodd'></path>
        </svg>
        <span className='mt-2 ml-2'>Variable Pay</span>
      </div>
    ),
    accessor: "variablePay",
    headerClassName:
      "px-6 py-6 w-2/12  bg-red-500 text-left text-md leading-4 font-medium text-white tracking-wider",
    headerTextClassName: "inline-flex justify-left cursor-pointer",
    cellClassName: "px-6 py-4 align-top leading-5 text-gray-700",
    Cell: ({ row }) => (
      <CustomInput
        enablecurr={{ view: true, style: "light" }}
        initialValue={row.original.variablePay}
      />
    ),
  },
  {
    Header: "Days on Leave",
    accessor: "daysOnLeave",
    headerClassName:
      "px-6 py-6 w-1/12  bg-red-500 text-left text-md leading-4 font-medium text-white tracking-wider",
    headerTextClassName: "inline-flex justify-left cursor-pointer",
    cellClassName: "px-6 py-4 align-top leading-5 text-gray-700",
    Cell: ({ row }) => (
      <CustomInput
        enablecurr={{ view: false, style: "" }}
        initialValue={row.original.daysOnLeave}
      />
    ),
  },
  {
    Header: "End of Service",
    accessor: "endOfService",
    headerClassName:
      "px-6 py-6 w-2/12  bg-red-500 text-left text-md leading-4 font-medium text-white tracking-wider",
    headerTextClassName: "inline-flex justify-left cursor-pointer",
    cellClassName: "px-6 py-4 align-top leading-5 text-gray-700",
    Cell: ({ row }) => {
      const original = row.original || {};
      return (
        <div className='flex'>
          <span className='mr-2 mt-2'>No</span>
          <div className='relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in'>
            <input
              type='checkbox'
              name='toggle'
              id='toggle'
              className={`${
                original.endOfService
                  ? "right-0 border-red-500"
                  : "right-3 border-gray-300"
              }  absolute block w-8 h-8 rounded-full bg-white border-4  appearance-none cursor-pointer focus:outline-none`}
            />
            <label
              htmlFor='toggle'
              className={`block overflow-hidden h-8 rounded-full ${
                original.endOfService ? "bg-red-500" : "bg-gray-300"
              } cursor-pointer`}></label>
          </div>
          <span className='mt-2'>Yes</span>
        </div>
      );
    },
  },
];

const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef();
    const resolvedRef = ref || defaultRef;

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
      <>
        <input
          className='form-checkbox h-5 w-5 text-orange-600'
          type='checkbox'
          ref={resolvedRef}
          {...rest}
        />
      </>
    );
  }
);

function PayrollTable({ tableData }) {
  const data = useMemo(() => tableData || [], [tableData]);
  const columns = useMemo(() => DISPLAY_COLUMNS, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
  } = useTable(
    {
      columns,
      data,
      initialState: {
        pageIndex: 0,
        pageSize: 10,
      },
    },
    useFilters,
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: "selection",
          headerClassName:
            "px-6 py-3 w-1/12 bg-red-500 text-left text-md leading-4 font-medium text-white tracking-wider ",
          headerTextClassName: "inline-flex justify-left cursor-pointer",
          cellClassName: "px-6 py-8 align-top leading-5 text-gray-700",

          Header: ({ getToggleAllPageRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps()} />
            </div>
          ),

          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ]);
    }
  );
  return (
    <div>
      <div className='px-4 mt-5' {...getTableProps()}>
        <div className='overflow-auto border border-gray-100 sm:rounded-lg mb-8 bg-white'>
          <table className='min-w-full divide-y divide-gray-200'>
            <thead>
              {headerGroups.map((headerGroup, idx) => {
                return (
                  <tr key={idx} {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column, cIdx) => {
                      return (
                        <th
                          key={cIdx}
                          {...column.getHeaderProps(
                            column.getSortByToggleProps()
                          )}
                          className={column.headerClassName}>
                          <div className={column.headerTextClassName}>
                            {column.render("Header")}
                          </div>
                        </th>
                      );
                    })}
                  </tr>
                );
              })}
            </thead>
            <tbody
              className='divide-y divide-gray-200'
              {...getTableBodyProps()}>
              {tableData.length === 0 ? (
                <tr>
                  <td className='px-6 py-4 text-base leading-5 text-gray-700'>
                    No data found
                  </td>
                </tr>
              ) : page.length === 0 ? (
                <tr>
                  <td className='px-6 py-4 text-base leading-5 text-gray-700'>
                    No matched records found
                  </td>
                </tr>
              ) : null}

              {page.map((row, index) => {
                prepareRow(row);
                return (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }`}>
                    {row.cells.map((cell) => {
                      return (
                        <td
                          {...cell.getCellProps({
                            className: cell.column.cellClassName,
                          })}>
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PayrollTable;
