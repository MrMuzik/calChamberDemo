import { useState } from "preact/hooks";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div>
      <div class="border-b border-gray-300">
        {["description", "auto-ship", "specifications"].map((tab) => (
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
      <div class="mt-4 text-gray-700">
        {activeTab === "description" && <p>This is the product description.</p>}
        {activeTab === "auto-ship" && <p>Auto-ship details and benefits.</p>}
        {activeTab === "specifications" && <p>Technical details of the product.</p>}
      </div>
    </div>
  );
}
