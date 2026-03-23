<template>
  <div class="legal-page">
    <header class="legal-notice-header">
      <div class="container notice-content">
        <p>The purpose of the following template is to assist you in writing your accessibility statement. Please note that you are responsible for ensuring that your site's statement meets the requirements of the local law in your area or region.</p>
        <p class="highlight">*Note: This page currently has several sections. Once you complete editing the Accessibility Statement below, you need to delete this section.</p>
        <p>To learn more about this, check out our article "<u>Accessibility: Adding an Accessibility Statement to Your Site</u>"</p>
      </div>
    </header>

    <main class="container legal-main">
      <h1 class="page-title serif">Accessibility Statement</h1>
      
      <p class="last-updated">This statement was last updated on [enter relevant date].</p>
      
      <p class="intro-text">
        We at [enter organization / business name] are working to make our site [enter site name and address] accessible to people with disabilities.
      </p>

      <section class="legal-section">
        <h2 class="section-subtitle">What web accessibility is</h2>
        <p>An accessible site allows visitors with disabilities to browse the site with the same or a similar level of ease and enjoyment as other visitors. This can be achieved with the capabilities of the system on which the site is running, and through assistive technologies.</p>
      </section>

      <section class="legal-section">
        <h2 class="section-subtitle">Accessibility Adjustments on This Site</h2>
        <p>We have adapted this site in accordance with WCAG [2.0 / 2.1 / 2.2 - select relevant option] guidelines, and have made the site accessible to the level of [A / AA / AAA - select relevant option]. This site's contents have been adapted to work with assistive technologies, such as screen readers and keyboard use. As part of this effort, we have also [remove irrelevant information]:</p>
        
        <ul class="legal-list">
          <li>Used the Accessibility Wizard to find and fix potential accessibility issues</li>
          <li>Set the language of the site</li>
          <li>Set the content order of the site's pages</li>
          <li>Defined clear heading structures on all of the site's pages</li>
          <li>Added alternative text to images</li>
          <li>Implemented color combinations that meet the required color contrast</li>
          <li>Reduced the use of motion on the site</li>
          <li>Ensured all videos, audio, and files on the site are accessible</li>
        </ul>
      </section>

      <section class="legal-section">
        <h2 class="section-subtitle">Declaration of Partial Compliance With the Standard Due to Third-Party Content <i>[only add if relevant]</i></h2>
        <p>The accessibility of certain pages on the site depend on contents that do not belong to the organization, and instead belong to [enter relevant third-party name]. The following pages are affected by this: [list the URLs of the pages]. We therefore declare partial compliance with the standard for these pages.</p>
      </section>

      <section class="legal-section">
        <h2 class="section-subtitle">Accessibility Arrangements in the Organization <i>[only add if relevant]</i></h2>
        <p>[Enter a description of the accessibility arrangements in the physical offices / branches of your site's organization or business. The description can include all current accessibility arrangements - starting from the beginning of the service (e.g., the parking lot and / or public transportation stations) to the end (such as the service desk, restaurant table, classroom etc.). It is also required to specify any additional accessibility arrangements, such as disabled services and their location, and accessibility accessories (e.g. in audio inductions and elevators) available for use]</p>
      </section>

      <section class="legal-section">
        <h2 class="section-subtitle">Requests, Issues, and Suggestions</h2>
        <p>If you find an accessibility issue on the site, or if you require further assistance, you are welcome to contact us through the organization's accessibility coordinator:</p>
        <ul class="legal-list contact-list">
          <li>[Name of the accessibility coordinator]</li>
          <li>[Telephone number of the accessibility coordinator]</li>
          <li>[Email address of the accessibility coordinator]</li>
          <li>[Enter any additional contact details if relevant / available]</li>
        </ul>
      </section>
    </main>
  </div>
</template>

<style scoped>
.legal-page {
  background-color: #fff;
  color: #000;
  font-family: 'Helvetica', Arial, sans-serif; /* Font không chân cho nội dung pháp lý */
  line-height: 1.6;
}

/* Banner đen phía trên */
.legal-notice-header {
  background-color: #000;
  color: #fff;
  padding: 40px 0;
  text-align: center;
  font-size: 13px;
}

.notice-content {
  max-width: 800px;
  margin: 0 auto;
}

.notice-content p {
  margin-bottom: 15px;
}

.highlight {
  font-weight: bold;
}

/* Nội dung chính */
.legal-main {
  max-width: 900px;
  margin: 0 auto;
  padding: 80px 20px 120px;
}

.page-title {
  font-size: 32px;
  margin-bottom: 10px;
  font-family: 'Times New Roman', Times, serif;
}

.last-updated, .intro-text {
  font-size: 14px;
  margin-bottom: 30px;
}

.legal-section {
  margin-bottom: 40px;
}

.section-subtitle {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
  font-family: 'Times New Roman', Times, serif;
}

.legal-section p {
  font-size: 14px;
  margin-bottom: 15px;
}

.legal-list {
  list-style-type: disc;
  padding-left: 25px;
  font-size: 14px;
}

.legal-list li {
  margin-bottom: 8px;
}

.contact-list {
  list-style-type: none;
  padding-left: 0;
}

.contact-list li::before {
  content: "•";
  margin-right: 10px;
}

@media (max-width: 768px) {
  .page-title { font-size: 28px; }
  .legal-notice-header { padding: 20px; }
}
</style>