import { useState } from "preact/hooks";

interface TabsProps {
  description: string;
  compliance: string;
  specifications: string;
  reviews: string;
}

export default function Tabs({ description, compliance, specifications, reviews }: TabsProps) {
  const [activeTab, setActiveTab] = useState("description");

  const getTabContent = () => {
    if (activeTab === "description") return description;
    if (activeTab === "compliance") return compliance;
    if (activeTab === "specifications") return specifications;
    if (activeTab === "reviews") return reviews;
    return "";
  };

  return (
    <>
      <div class="border-b border-gray-300 flex">
        {["description", "compliance", "specifications", "reviews"].map((tab) => (
          <button
            key={tab}
            class={`text-sm font-semibold px-4 py-2 ${
              activeTab === tab ? "text-calchamber-blue border-b-2 border-calchamber-blue" : "text-gray-600"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      {/* ✅ Render raw HTML safely */}
      <div class="mt-4 text-gray-700 text-base max-w-prose" dangerouslySetInnerHTML={{ __html: getTabContent() }} />
    </>
  );
}
