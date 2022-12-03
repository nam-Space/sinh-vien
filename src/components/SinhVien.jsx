import React from "react";

const SinhVien = () => {
    const users = [
        {
            id: 1,
            name: "AAA",
            age: 18,
            address: "HD",
        },
        {
            id: 2,
            name: "BBB",
            age: 18,
            address: "HDD",
        },
        {
            id: 3,
            name: "CCC",
            age: 18,
            address: "SSD",
        },
    ];

    return (
        <div>
            <table>
                <th>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Address</td>
                    </tr>
                </th>
                <tbody>
                    {users.map((u) => (
                        <tr>
                            <td>{u.id}</td>
                            <td>{u.name}</td>
                            <td>{u.age}</td>
                            <td>{u.address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SinhVien;
