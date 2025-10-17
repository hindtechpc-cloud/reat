import React from "react";
import { emp } from "./data/data";
export default function Employee() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th className="py-2 px-4 border-b ">Name</th>
            <th className="py-2 px-4 border-b ">Salary</th>
            <th className="py-2 px-4 border-b ">Email</th>
            <th className="py-2 px-4 border-b ">Role</th>
            <th className="py-2 px-4 border-b ">Experience</th>
            <th className="py-2 px-4 border-b ">Compnay name</th>
          </tr>
        </thead>

        <tbody>
          {emp?.length > 0 &&
            emp?.map((emp) => {
              return (
                <tr key={emp?.name}>
                    
                  <td className="py-2 px-4 border-b ">{emp.name}</td>
                  <td className="py-2 px-4 border-b ">{emp.salary}</td>
                  <td className="py-2 px-4 border-b ">{emp.email}</td>
                  <td className="py-2 px-4 border-b ">{emp.role}</td>
                  <td className="py-2 px-4 border-b ">{emp.expe}</td>
                  <td className="py-2 px-4 border-b ">{emp.company_name}</td>
                </tr>
              );
            })}


          {/* <tr>
                <td className='py-2 px-4 border-b text-center'>Vansh gupta</td>
                <td className='py-2 px-4 border-b text-center'>40 k</td>
                <td className='py-2 px-4 border-b text-center'>vansh@gmail.com </td>
                <td className='py-2 px-4 border-b text-center'>mern dev </td>
                <td className='py-2 px-4 border-b text-center'>1 year </td>
                <td className='py-2 px-4 border-b text-center'>Hindtech </td>
            </tr> */}
          {/* <tr>
                <td className='py-2 px-4 border-b text-center'>Vansh gupta</td>
                <td className='py-2 px-4 border-b text-center'>40 k</td>
                <td className='py-2 px-4 border-b text-center'>vansh@gmail.com </td>
                <td className='py-2 px-4 border-b text-center'>mern dev </td>
                <td className='py-2 px-4 border-b text-center'>1 year </td>
                <td className='py-2 px-4 border-b text-center'>Hindtech </td>
            </tr>
            <tr>
                <td className='py-2 px-4 border-b text-center'>Vansh gupta</td>
                <td className='py-2 px-4 border-b text-center'>40 k</td>
                <td className='py-2 px-4 border-b text-center'>vansh@gmail.com </td>
                <td className='py-2 px-4 border-b text-center'>mern dev </td>
                <td className='py-2 px-4 border-b text-center'>1 year </td>
                <td className='py-2 px-4 border-b text-center'>Hindtech </td>
            </tr> */}
        </tbody>
      </table>
    </div>
  );
}
