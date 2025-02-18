import Header from "../components/Header.tsx";
import Product from "../islands/Product.tsx";
import Promo from "../components/Promo.tsx";

const Summary = () => (
  <>
    Stay on top of San Francisco's labor law posting requirements with this 4-poster set,&nbsp;<strong>designed for businesses with 100+ employees</strong>.&nbsp;Featuring mandatory workplace notices in multiple languages.
  </>
);

const productTabs = {
  description: `
    <p>San Francisco businesses must display labor law notices based on company size. <a href="#" class="text-link-blue">Use this guide</a> to find the right poster set.</p>
    <p class="mt-4"><strong>Included:</strong><br />
        <ul class="list-disc list-outside ml-8 space-y-2">
            <li>San Francisco Labor Law Notice Poster (26" x 22") - Covers Minimum Wage, Paid Sick Leave, and Salary History Ordinances for all employers with employees working in San Francisco. 
            (Languages: English, Spanish, Chinese, Vietnamese, Russian, Tagalog)</li>
            <li>San Francisco Fair Chance Notice (17" x 17") - Required for employers with 5+ employees, covering fair hiring practices. 
            (Languages: English, Spanish, Chinese, Tagalog)</li>
            <li>San Francisco Workplace Ordinances Poster (35" x 24") - Includes notices for Family Friendly Workplace, Health Care Security, and Paid Parental Leave Ordinances for businesses with 20+ employees. 
            (Languages: English, Spanish, Chinese, Tagalog)</li>
            <li>San Francisco Public Health Emergency & Military Leave Notices Poster (36.5" x 23") - Covers Public Health Emergency Leave & Military Leave Pay Protection Act, required for businesses with 100+ employees. 
            (Languages: English, Spanish, Chinese, Tagalog)</li>
        </ul>
    </p>
    <p class="mt-4"><strong>Auto-Ship: Compliance Made Easier</strong></p>
    <p>Put your labor law poster ordering on auto-pilot. Auto-Ship automatically delivers next year's updated posters, so you don't have to think about it.</p>
    <ul class="list-disc list-outside ml-8 space-y-2 mt-4">
        <li>Stay ahead - get the latest required posters every year, hassle-free.</li>
        <li>No reordering - we handle it for you, so it's one less task on your list.</li>
        <li>Flexible & worry-free - we'll remind you before shipping, and you can update or cancel anytime.</li>
    </ul>
    <p class="mt-4">Like a personal assistant for compliance—so you can focus on running your business.</p>
    <p class="mt-4">Learn more about <a href="#" class="text-link-blue">Auto-Ship</a></p>
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
  specifications: `<p>Technical details of the product.</p>`,
  reviews: `<p>Customer reviews and ratings.</p>`,
};

export default function Home() {
  return (
    <>
      <Header />
      <main class="container mx-auto mt-8 px-4">
        <Promo />
        <Product
          title="San Francisco Labor Law 4-Poster Set"
          imageUrl="/san-francisco-labor-law-posters-4-poster-set.webp"
          breadcrumb="San Francisco Labor Law 4-Poster Set"
          price="$56.99"
          sku="PSFLK4"
          summary={<Summary />}
          tabs={productTabs}
       />
      </main>
    </>
  );
}
