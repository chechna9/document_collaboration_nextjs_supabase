
import Link from "next/link";
const mockDocuments = [
  { id: "1", title: "Document 1", description: "Description of Document 1", ownerId: "user1" },
  { id: "2", title: "Document 2", description: "Description of Document 2", ownerId: "user2" },
  { id: "3", title: "Document 3", description: "Description of Document 3", ownerId: "user3" },
  { id: "4", title: "Document 4", description: "Description of Document 4", ownerId: "user4" },
];

const Documents = () => {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-white text-3xl font-bold">Documents</h1>
        <Link href={"/documents/new"}><button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
        >
          New Document
        </button>
        </Link>
        
      </div>
      <p className="mb-8 text-gray-600">Here is a list of your documents:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {mockDocuments.map((doc) => (
          <Link
            key={doc.id}
            href={`/documents/${doc.id}`}
            className="block p-4 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{doc.title}</h2>
            <p className="text-gray-600">{doc.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Documents;
