import Link from "next/link";
import React from "react";

const Documents = () => {
  return (
    <div>
      Documents
      <p>Here is a list of documents</p>
      <Link href="/documents/1">
        Document 1
      </Link>
    </div>
  );
};

export default Documents;
