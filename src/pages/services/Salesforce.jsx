import SalesforceHero from "../../components/services/salesforce/SalesforceHero";
import SalesforceCapabilities from "../../components/services/salesforce/SalesforceCapabilities";
import SalesforceServices from "../../components/services/salesforce/SalesforceServices";
import SalesforceWhyUs from "../../components/services/salesforce/SalesforceWhyUs";
import SalesforceCTA from "../../components/services/salesforce/SalesforceCTA";
function Salesforce() {
  return (
    <main>
      <SalesforceHero />
      <SalesforceCapabilities />
      <SalesforceServices />
      <SalesforceWhyUs />
      <SalesforceCTA />
    </main>
  );
}

export default Salesforce;