import Header from "../../components/Header.tsx";
import Product from "../../islands/Product.tsx";
import Promo from "../../components/Promo.tsx";

const summary = {
  summary: `
    Stay on top of San Francisco's labor law posting requirements with this poster,&nbsp;<strong>designed for businesses with 1 to 4 employees</strong>.&nbsp;Featuring mandatory workplace notices in multiple languages.
  `
};

const productTabs = {
  description: `
    <p>San Francisco businesses must display labor law notices based on company size. <a href="#" class="text-link-blue">Use this guide</a> to find the right poster set.</p>
    <p class="mt-4"><strong>Included:</strong><br />
    <p class="mt-4"><strong>San Francisco Labor Law Notice Poster (26" x 22")</strong><br />Covers Minimum Wage, Paid Sick Leave, and Salary History Ordinances for all employers with employees working in San Francisco.</p>
    <ul class="list-disc list-outside ml-8">
      <li>Languages: English, Spanish, Chinese, Vietnamese, Russian, Tagalog</li>  
    </ul>
    <div class="mt-8 py-4 px-8 bg-calchamber-orange rounded-lg">
      <p><strong>Auto-Ship: Compliance Made Easier</strong></p>
      <p>Put your labor law poster ordering on auto-pilot. Auto-Ship automatically delivers next year's updated posters, so you don't have to think about it.</p>
      <ul class="list-disc list-outside ml-8 space-y-2 mt-4">
          <li>Stay ahead - get the latest required posters every year, hassle-free.</li>
          <li>No reordering - we handle it for you, so it's one less task on your list.</li>
          <li>Flexible & worry-free - we'll remind you before shipping, and you can update or cancel anytime.</li>
      </ul>
      <p class="mt-4">Like a personal assistant for compliance—so you can focus on running your business.</p>
    </div>
    `,
  compliance: `
    <p class="text-calchamber-red"><strong>Important: Failure to meet San Francisco posting requirements and local employment laws may result in citations, penalties, or legal action.</strong></p> 
    <p class="mt-4"><strong>San Francisco Requirements:</strong></p>
    <p class="mt-4">Employers must display the applicable posters in a conspicuous place at the workplace or job site where any employee works, usually in a break room or similar common space.</p>
    <p class="mt-4">Employers must post all notices in English, Spanish, Chinese and any other language spoken by at least five percent of the employees at the workplace or job site.</p>
    <p class="mt-4"><strong><span class="text-calchamber-red">COMPLIANCE ALERTS:</span> (CalChamber's 2025 posters reflect these updates.)</strong></p>
    <p class="mt-4"><span class="text-calchamber-red">Effective January 1, 2025</span> - for San Francisco employers with 20+ employees - Health Care Security Ordinance (HCSO) rate increases take effect and the Paid Parental Leave Ordinance reflects the weekly benefit increase from the California Paid Family Leave (PFL) program.</p>
    <p class="mt-4"><span class="text-calchamber-red">Effective July 1, 2024</span>, the new San Francisco minimum wage is $18.67/hour and requires an updated posting for all San Francisco employers on that date.</p>
    <ul class="list-disc list-outside ml-8 space-y-2 mt-4">
        <li>If you've previously purchased a single San Francisco Labor Law Poster (1 to 4 employees) or poster sets for July 1, 2024 from CalChamber, you're in compliance.</li>
        <li>If you've previously purchased a single San Francisco Labor Law Poster (1 to 4 employees) or poster sets prior to May 2024 from CalChamber, you'll need to purchase the current San Francisco Labor Law Notice Poster (Item PSFL), which reflects the updated minimum wage notice, as described above.</li>
    </ul>
  `,
  specifications: `
    <div class="w-full grid grid-cols-2 text-sm">
      <div class="p-3 font-bold bg-gray-200">STATE</div>
      <div class="p-3 bg-gray-200">CA</div>

      <div class="p-3 font-bold bg-white">LANGUAGE PREFERENCE</div>
      <div class="p-3 bg-white">MULTI-LANGUAGE</div>

      <div class="p-3 font-bold bg-gray-200">FINISH</div>
      <div class="p-3 bg-gray-200">LAMINATE</div>

      <div class="p-3 font-bold bg-white">MANDATORY</div>
      <div class="p-3 bg-white">YES</div>

      <div class="p-3 font-bold bg-gray-200">POSTER PROTECT</div>
      <div class="p-3 bg-gray-200">NO</div>

      <div class="p-3 font-bold bg-white">DIGITAL</div>
      <div class="p-3 bg-white">NO</div>

      <div class="p-3 font-bold bg-gray-200">LOCALE</div>
      <div class="p-3 bg-gray-200">SAN FRANCISCO</div>

      <div class="p-3 font-bold bg-white">EMPLOYEE COUNT</div>
      <div class="p-3 bg-white">1 to 4</div>
    </div>
  `,
  reviews: `<p>Reviews (0) - Be the First to Share Your Experience!</p>`,
};

export default function Single() {
  return (
    <>
      <Header />
      <main class="container mx-auto mt-8 px-4">
        <Promo />
        <Product
          title="San Francisco Labor Law Poster"
          imageUrl="/san-francisco-labor-law-posters.webp"
          breadcrumb="San Francisco Labor Law Poster"
          price="$18.99"
          sku="PSFL"
          summary={summary}
          tabs={productTabs}
       />
      </main>
    </>
  );
}
