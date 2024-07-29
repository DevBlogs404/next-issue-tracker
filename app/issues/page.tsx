import { Link, Table } from "@radix-ui/themes";
import React from "react";
import prisma from "@/prisma/client";
import StatusBadge from "../components/StatusBadge";
import IssueActions from "./IssueActions";
import StyledLink from "../components/StyledLink";

const IssuesPage = async () => {
  const Issues = await prisma.issue.findMany();

  return (
    <div>
      <IssueActions />
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Status
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Created
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {Issues.map((issue) => (
            <Table.Row key={issue.id}>
              <Table.Cell>
                <StyledLink href={`/issues/${issue.id}`}>
                  {issue.title}
                </StyledLink>
                <div className="block md:hidden">
                  <StatusBadge status={issue.status} />
                </div>
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                <StatusBadge status={issue.status} />
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                {issue.createdAt.toDateString()}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default IssuesPage;
