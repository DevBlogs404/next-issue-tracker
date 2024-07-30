"use client";

import { User } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import axios from "axios";
import { use, useEffect, useState } from "react";

const AssigneeSelect = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      const { data } = await axios.get<User[]>("/api/users");
      setUsers(data);
    };
    getUsers();
  }, []);

  return (
    <Select.Root>
      <Select.Trigger placeholder="Assign.." />
      <Select.Content>
        <Select.Group>
          <Select.Label>Suggesstions</Select.Label>
          {users.map((user) => (
            <Select.Item key={user.id} value={user.id}>
              {user.name}
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export default AssigneeSelect;