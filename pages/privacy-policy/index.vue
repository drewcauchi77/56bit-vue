<template>
  <main role="main" class="page-content privacy-cookies-main">
    
    <section class="contents-section">
      <div class="contents-container container">
        <div class="contents-inner-container">
          <span class="contents-tagline">Version 1</span>

          <h2 class="contents-title">Privacy Policy</h2>

          <span class="contents-sect-title">Contents</span>

          <ol class="contents-list">
            <li>Version Control</li>
            <li>Who are We</li>
            <li>Application of this Policy</li>
            <li>Applicable Laws</li>
            <li>Legal Bases</li>
            <li>How do we collect Personal Data</li>
            <li>What Personal Data is collected</li>
            <ol>
              <li>Users of our Website/s</li>
              <li>Request for Information</li>
              <li>Requests to Receive Updates and Information</li>
              <li>Clients using our Services</li>
              <li>Collaborators and Suppliers</li>
              <li>Prospective Employees</li>
              <li>Employees</li>
              <li>Testimonials</li>
            </ol>
            <li>How is Personal Data used</li>
            <li>Recipients of Personal Data</li>
            <ol>
              <li>Persons/Entities we may Disclose Information to</li>
              <li>Transfer of Data Within the EU/EEA</li>
              <li>Transfer of Data outside the EU/EEA</li>
              <li>Remote Processing</li>
            </ol>
            <li>Retention of Personal Data</li>
            <li>Automated Indiviual Decision Making, Including Profiling</li>
            <li>Processing Services for Data Controllers</li>
            <li>Systems</li>
            <li>Third Party Personal Data</li>
            <li>Protection of Personal Data</li>
            <li>Your Rights</li>
            <li>Changes to this Privacy Policy</li>
            <li>Approval and Review</li>
          </ol>
        </div>
      </div>
    </section>

    <section class="details-section">
      <div class="details-container container">
        <div class="single-privacy-content" :class="{ open: (setContent.includes('1')) }">
          <div class="single-privacy-upper" id="1" @click="selectContent">
            <h3 class="single-privacy-title">1. Version Control</h3>

            <div class="open-button" :class="{ minus: (setContent.includes('1')) }">
              <span></span><span></span>
            </div>
          </div>

          <div class="single-privacy-details post-content">
            <p>Version: 1 <br>
              Date: 1st August 2020<br>
              Summary of Updates: Creation of this policy</p>
          </div>
        </div>

        <div class="single-privacy-content" :class="{ open: (setContent.includes('2')) }">
          <div class="single-privacy-upper" id="2" @click="selectContent">
            <h3 class="single-privacy-title">2. Who are We</h3>

            <div class="open-button" :class="{ minus: (setContent.includes('2')) }">
              <span></span><span></span>
            </div>
          </div>

          <div class="single-privacy-details post-content">
            <p>56Bit Ltd is an entity constituted in Malta, operating internationally, providing cloud infrastructure services, having registration number C 92422 and registered address at 32, Triq il-Gewwinija, Ghaxaq GXQ 1970, Malta.</p>
            <p>This privacy policy aims at providing clarity and information about our non-public personal data (as defined below) collection, processing and retention. Should you have any queries, require clarifications or additional information, please feel free to contact us.</p>

            <p>Our contact details are the following:</p>
            <ul class="custom-list">
              <li><p>Address: 32, Triq il-Gewwinija, Ghaxaq GXQ1970</p></li>
              <li><p>Contact number: +356 99787661</p></li>
              <li><p>Email: legal@56bit.com</p></li>
            </ul>

            <p>56Bit Ltd is the controller and the processor for the non-public personal data it collects and processes for its own use and on its behalf. 56Bit Ltd also acts as processor for its clients and therefore processes personal data on behalf of one or more data controllers (e.g. when offering cloud infrastructure services to customers). In case of uncertainty over who is the data controller, please contact us on the contact details outlined above.</p>

            <p>The procedures, terms and conditions of processing of personal data herein apply in all cases, that is, whether processing is being undertaken in our capacity of data controller or as data processor on behalf of another data controller (refer to section 12).</p>
          </div>
        </div>

        <div class="single-privacy-content" :class="{ open: (setContent.includes('3')) }">
          <div class="single-privacy-upper" id="3" @click="selectContent">
            <h3 class="single-privacy-title">3. Application of this Policy</h3>

            <div class="open-button" :class="{ minus: (setContent.includes('3')) }">
              <span></span><span></span>
            </div>
          </div>

          <div class="single-privacy-details post-content">
            <p>This policy refers and applies to non-public personal data as defined in the GDPR, that is data/information relating to and identifying a natural person, which may be processed by us. In this policy, ‘you’ or ‘user’ refers to an identified or identifiable natural person.</p>
          </div>
        </div>

        <div class="single-privacy-content" :class="{ open: (setContent.includes('4')) }">
          <div class="single-privacy-upper" id="4" @click="selectContent">
            <h3 class="single-privacy-title">4. Applicable Laws</h3>

            <div class="open-button" :class="{ minus: (setContent.includes('4')) }">
              <span></span><span></span>
            </div>
          </div>

          <div class="single-privacy-details post-content">
            <p>56Bit Ltd is established in Malta and therefore the principle privacy laws applicable are the following:</p>

            <ul class="custom-list">
              <li><p>Data Protection Act (Chapter 586 of the Laws of Malta) and the subsidiary legislation issued thereunder;</p></li>
              <li><p>General Data Protection Regulation or GDPR (Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of Personal Data and on the free movement of such data, and repealing Directive 95/46/EC).</p></li>
            </ul>
          </div>
        </div>

        <div class="single-privacy-content" :class="{ open: (setContent.includes('5')) }">
          <div class="single-privacy-upper" id="5" @click="selectContent">
            <h3 class="single-privacy-title">5. Legal Bases</h3>

            <div class="open-button" :class="{ minus: (setContent.includes('5')) }">
              <span></span><span></span>
            </div>
          </div>

          <div class="single-privacy-details post-content">
            <p>In line with the principle of data minimization and data economy, we only collect personal data and process it on the following legal bases:</p>

            <ul class="custom-list">
              <li><p>with your consent which shall not be presumed and can be withdrawn by you at any time;</p></li>
              <li><p>for the performance of a contract or to take steps to enter into a contract in particular when you request our services or you are an employee, a collaborator or a supplier;</p></li>
              <li><p>in furtherance of any legal obligation or regulation; and/or</p></li>
              <li><p>for legitimate interest, primarily to protect us from legal action or claims from third parties, including you and/or to protect our legal rights and/or those of our employees, collaborators and/or suppliers.</p></li>
            </ul>
          </div>
        </div>

        <div class="single-privacy-content" :class="{ open: (setContent.includes('6')) }">
          <div class="single-privacy-upper" id="6" @click="selectContent">
            <h3 class="single-privacy-title">6. How do we collect Personal Data</h3>

            <div class="open-button" :class="{ minus: (setContent.includes('6')) }">
              <span></span><span></span>
            </div>
          </div>

          <div class="single-privacy-details post-content">
            <p>We collect personal data:</p>

            <ul class="custom-list">
              <li><p>digitally through our site (56bit.com) and the use of cookies and similar technologies (please refer to our <NuxtLink to="/cookie-policy" class="custom-link">Cookies Policy</NuxtLink>); and</p></li>
              <li><p>non-digitally, that is, information you give us and/or obtained from other external sources including social media platforms, publicly accessible information/databases, your referees and other third parties.</p></li>
            </ul>
          </div>
        </div>

        <div class="single-privacy-content" :class="{ open: (setContent.includes('7')) }">
          <div class="single-privacy-upper" id="7" @click="selectContent">
            <h3 class="single-privacy-title">7. What Personal Data is collected</h3>

            <div class="open-button" :class="{ minus: (setContent.includes('7')) }">
              <span></span><span></span>
            </div>
          </div>

          <div class="single-privacy-details post-content">
            <p>The non-public personal data that we collect and the processing of such information will vary on the basis of the purpose and scope of the particular use or engagement as outlined below.</p>
            
            <span class="custom-span">A. Users of our Website/s</span>

            <p>We operate the website 56bit.com.</p>
            <p>You may visit our website without submitting any personal data. However, to use certain features of the website (such as the fill-in forms to request information), personal data may be required (see the section entitled ‘Request for Information’ below).</p>
            <p>Additionally, personal data on users of the website may also be collected by automated means. This information is collected through the use of cookies and other similar technologies. You can read more about this in our Cookies Policy.</p>

            <span class="custom-span">B. Request for Information</span>

            <p>What personal data is collected?</p>
            <p>Through our website you may fill in an online form and request information. The information collected through the request for information function is the following:</p>

            <ul class="custom-list">
              <li><p>information you provide in the fields of the online form;</p></li>
              <li><p>IP address and other online identifiers;</p></li>
              <li><p>date, time and data of our website/s access; and</p></li>
              <li><p>identification data of the used browser.</p></li>
            </ul>

            <p>You can also contact us and request information through email, phone, or social media. In such cases we will be collecting any information you provide to us or available on the relative media used. In all cases, we will also collect any correspondence in furtherance of the request.</p>
            <p>Is it necessary?</p>
            <p>This information is necessary for us to be able to respond to your request. General and preliminary information will be provided to you without the requirement of any other additional personal information.</p>

            <span class="custom-span">C. Requests to receive Updates and Information</span>

            <p>What personal data is collected?</p>
            <p>We keep in touch with our clients and try to keep them updated on developments that affect their business or the services we are providing. If you consent to receive news and information from us, we will collect your contact details and keep a record of the information we have sent you as well as any interactions related to such information sent to you.</p>
            <p>Is it necessary?</p>
            <p>If you do not provide the information outlined under this section, we will not be able to provide you with news and information.</p>

            <span class="custom-span">D. Clients using our Services</span>

            <p>What personal data is collected?</p>
            <p>When we are providing a service, we collect personal data as to be able to provide the services. The information collected varies depending on the service/s being provided. As a minimum, the following personal data is collected on every customer (if a natural person) or customer’s contact person:</p>

            <ul class="custom-list">
              <li><p>name and surname;</p></li>
              <li><p>contact details (mailing address, email address, contact numbers); and</p></li>
              <li><p>bank account and bank related details (for customers that are natural persons only).</p></li>
            </ul>

            <p>Is it necessary?</p>
            <p>If you are not able or unwilling to provide us such information, we may not be able to provide the service/s.</p>

            <span class="custom-span">E. Collaborators and Suppliers</span>

            <p>What personal data is collected?</p>
            <p>On collaborators and suppliers, we collect information as required by statutory obligations, principally information required by rules and regulations and information required for the collaboration or the provision of the service by the supplier to us. As a minimum, the following personal data is collected on every supplier (if a natural person) or supplier’s contact person:</p>

            <ul class="custom-list">
              <li><p>name and surname;</p></li>
              <li><p>contact details (mailing address, email address, contact numbers); and</p></li>
              <li><p>bank account and bank related details (for suppliers that are natural persons).</p></li>
              <li><p>Address</p></li>
              <li><p>VAT Number</p></li>
            </ul>

            <p>Is it necessary?</p>
            <p>If a collaborator or supplier is unable or unwilling to provide us such information, we will not be able to collaborate or use the services.</p>

            <span class="custom-span">F. Prospective Employees</span>

            <p>What personal data is collected?</p>
            <p>In those cases where persons apply for a job with any of the 56Bit entities, the following information will be collected:</p>

            <ul class="custom-list">
              <li><p>name and contact details;</p></li>
              <li><p>your previous experiences and details of your previous jobs;</p></li>
              <li><p>education details and transcripts;</p></li>
              <li><p>referees’ names and contact details; and</p></li>
              <li><p>answers to questions made to you during the recruitment process.</p></li>
            </ul>

            <p>We work with various recruitment agencies and such information may be obtained from agencies you would have applied with. Please note that we are not responsible and do not undertake any responsibility or liability in relation to the collection and processing of your personal information by such agencies.</p>
            <p>We may request you to allow us to process your personal information to contact you for any other vacancy that may arise. Should you consent, we may contact you whenever a suitable vacancy will arise.</p>
            <p>Is it necessary?</p>
            <p>Candidates are free to provide the information they deem fit. Whilst we will still process your application for a job, should the information outlined herein not be provided in whole or in part, your application may be affected.</p>
            <p>The information required on acceptance of an employment offer on the other hand is necessary to finalize your employment and onboarding process.</p>

            <span class="custom-span">G. Employees</span>

            <p>What personal data is collected?</p>
            <p>On acceptance of an employment offer of an employee, we may collect the following information:</p>

            <ul class="custom-list">
              <li><p>identification document;</p></li>
              <li><p>police conduct certificate or equivalent;</p></li>
              <li><p>banking, tax and other details;</p></li>
              <li><p>health Information to ensure you are fit to work and to cater for any special conditions; and</p></li>
              <li><p>emergency contact details.</p></li>
            </ul>

            <p>During your employment with us, other information will be collected:</p>

            <ul class="custom-list">
              <li><p>records of your employment performance;</p></li>
              <li><p>answers to questions we make to you during assessments;</p></li>
              <li><p>health information obtained through medical certificates and the employer’s medical doctor;</p></li>
              <li><p>other information required for clearance of employees, where necessary, by our customers.</p></li>
            </ul>

            <p>We may also collect general information about you such as your hobbies and interests with the aim of enhancing your working experience with us.</p>
            <p>Is it necessary?</p>
            <p>Except for the general information collected which is optional, the information outlined herein is required and will affect your employment if not provided.</p>

            <span class="custom-span">H. Testimonials</span>

            <p>What personal data is collected?</p>
            <p>Testimonials/reviews provided by you may have personal data including name and other information that may make you identifiable. If you provide a testimonial and provide the necessary consent, we will post testimonials/review on our Website and/or publish them for general public access online or offline.</p>
            <p>Is it necessary?</p>
            <p>We will request your consent for the publishing/use of testimonials/reviews. We will not use such testimonials/reviews without the necessary consent.</p>
          </div>
        </div>

        <div class="single-privacy-content" :class="{ open: (setContent.includes('8')) }">
          <div class="single-privacy-upper" id="8" @click="selectContent">
            <h3 class="single-privacy-title">8. How is Personal Data used</h3>

            <div class="open-button" :class="{ minus: (setContent.includes('8')) }">
              <span></span><span></span>
            </div>
          </div>

          <div class="single-privacy-details post-content">
            <p>Depending on the information collected, any personal non-public information so collected will be used to:</p>

            <ul class="custom-list">
              <li><p>provide you with news and information, reply to requests, provide services and follow-up;</p></li>
              <li><p>provide information to your representatives/intermediaries, access and progress job applications;</p></li>
              <li><p>in case of employees progress their employment, access performance and training;</p></li>
              <li><p>to implement and enhance collaboration or receive services in case of collaborators or suppliers;</p></li>
              <li><p>for marketing purposes in those cases where consent is provided;</p></li>
              <li><p>comply with any legal or regulatory requirement;</p></li>
              <li><p>to protect us from legal action and claims; and</p></li>
              <li><p>for our internal purposes including the administration of the flow of such information, market research and data analytics, internal record keeping, financial and market research and/or to improve our products and people’s experiences.</p></li>
            </ul>
          </div>
        </div>

        <div class="single-privacy-content" :class="{ open: (setContent.includes('9')) }">
          <div class="single-privacy-upper" id="9" @click="selectContent">
            <h3 class="single-privacy-title">9. Recipients of Personal Data</h3>

            <div class="open-button" :class="{ minus: (setContent.includes('9')) }">
              <span></span><span></span>
            </div>
          </div>

          <div class="single-privacy-details post-content">
            <span class="custom-span">A. Persons/Entities we may disclose information to</span>

            <p>We may disclose personal information legally in the following scenarios:</p>

            <ul class="custom-list">
              <li><p>with your consent;</p></li>
              <li><p>for the performance of a contract or to take steps to enter into a contract;</p></li>
              <li><p>to enforce our contractual terms;</p></li>
              <li><p>to protect us and our employees from legal action or claims from third parties, including you;</p></li>
              <li><p>in cases of merger or acquisition of our business or parts of it to the new owners;</p></li>
              <li><p>to group entities;</p></li>
              <li><p>when there is a legal requirement to do so; and</p></li>
              <li><p>if we are requested to do so by a governmental or regulatory authority or by a court of competent jurisdiction. In this context, persons/entities, to whom personal data may be disclosed include the following:</p></li>
              <li><p>to our customers (including information on subcontractors if required by the customer and employee details for any due diligence/clearances processes our customers may require to undertake on us and our people);</p></li>
              <li><p>our legal advisors, accountants, auditors and other advisers;</p></li>
              <li><p>IT services providers, including cloud service providers we use for the provision of services;</p></li>
              <li><p>subcontractors;</p></li>
              <li><p>public authorities, government departments, or courts of law.</p></li>
            </ul>

            <p>A list of providers to which your information is or may be disclosed as necessary and subject to legal basis is available on request. Kindly contact us on details outlined above in section 1 above should you require further details.</p>

            <span class="custom-span">B. Transfer of Data within the EU/EEA</span>

            <p>The free exchange of personal data between Member States is a fundamental aspect of the EU’s basic principles. This principle is also reflected in the GDPR, which allows for the transfer between EU/EEA companies subject to the legal bases as provided above under the ‘Legal Bases’ section.</p>
            <p>As a general rule, therefore, the personal data we process will be so processed within the EU/EEA, subject to the legal basis for processing outlined herein.</p>

            <span class="custom-span">C. Transfer of Data outside the EU/EEA</span>

            <p>Subject to legal basis, personal data may be transferred to non-EU/EEA countries deemed by the European Commission to offer an adequate level of legal of protection. In the absence of such status as declared by the European Commission, the GDPR provides that a transfer can take place through the provision of appropriate safeguards and on condition that enforceable rights and effective legal remedies are available for individuals. Such appropriate safeguards include contractual arrangements with the recipient of the personal data, using, the standard contractual clauses approved by the European Commission. For this purpose, when transferring data to such countries and subject to legal basis, we ensure that contractual arrangements based on contractual provisions as approved by the European Commission are in place.</p>

            <span class="custom-span">D. Remote Processing</span>

            <p>Personal data sent via remote means may be transmitted across international borders irrespective of where the sender and receiver are located. This may include transfers of personal data from you to us via a country outside the EU/EEA and not recognised by the European Commission as having adequate standards of personal data protection. In this context, we shall not be responsible for any act of omission by you or any third party that may affect your personal data prior to us receiving it. We accept no responsibility for information in transit.</p>
          </div>
        </div>

        <div class="single-privacy-content" :class="{ open: (setContent.includes('10')) }">
          <div class="single-privacy-upper" id="10" @click="selectContent">
            <h3 class="single-privacy-title">10. Retention of Personal Data</h3>

            <div class="open-button" :class="{ minus: (setContent.includes('10')) }">
              <span></span><span></span>
            </div>
          </div>

          <div class="single-privacy-details post-content">
            <p>We retain the personal information that we collect from you only for as long as required for statutory, business, tax or legitimate interest purposes. Your information is retained in electronic or paper format or both. When it is no longer required, it will be anonymised or deleted and destroyed. Should you wish to obtain information on the specific retention period of any personal information we hold on to, please contact us on the contact details outlined above in section 1.</p>
          </div>
        </div>

        <div class="single-privacy-content" :class="{ open: (setContent.includes('11')) }">
          <div class="single-privacy-upper" id="11" @click="selectContent">
            <h3 class="single-privacy-title">11. Automated Individual Decision Making, Including Profiling</h3>

            <div class="open-button" :class="{ minus: (setContent.includes('11')) }">
              <span></span><span></span>
            </div>
          </div>

          <div class="single-privacy-details post-content">
            <p>We do not undertake fully automated individual decision-making, including profiling</p>
          </div>
        </div>

        <div class="single-privacy-content" :class="{ open: (setContent.includes('12')) }">
          <div class="single-privacy-upper" id="12" @click="selectContent">
            <h3 class="single-privacy-title">12. Processing Services for Data Controllers</h3>

            <div class="open-button" :class="{ minus: (setContent.includes('12')) }">
              <span></span><span></span>
            </div>
          </div>

          <div class="single-privacy-details post-content">
            <p>In the provision of our services, we may be acting as processors on behalf of data controllers. In such cases, the terms, provisions and limitations herein apply. When acting as data processors for others, our processing activities are limited to having access to personal data through the cloud infrastructure services provided to our customers, to possibly store such data and to use/process such data in relation to specific instructions from our customers. We will never access or process the data in any other manner. In this context, the customer shall ensure that any processing of personal data by the customer as the data controller (particularly our access to such data and instructions from the customer relating to the use/processing of such data by us on the customer’s behalf) shall be covered by the necessary consents or legal basis on the customer’s end, and undertaken by the customer according to law, in particular data protection law and the GDPR. The customer shall indemnify and hold us harmless to the fullest extent permitted at law with respect to all claims, damages or losses resulting from a breach of this.</p>
          </div>
        </div>

        <div class="single-privacy-content" :class="{ open: (setContent.includes('13')) }">
          <div class="single-privacy-upper" id="13" @click="selectContent">
            <h3 class="single-privacy-title">13. Systems</h3>

            <div class="open-button" :class="{ minus: (setContent.includes('13')) }">
              <span></span><span></span>
            </div>
          </div>

          <div class="single-privacy-details post-content">
            <p>We maintain physical, electronic and procedural safeguards to protect personal non-public data. We attempt to protect your personal data from unauthorized access by third parties by means of precautions such as pseudonymization, data minimization and observing deletion periods. Despite these protective measures, however, we cannot completely rule out unlawful processing by third parties. Additionally, we use various systems in our collection, processing and storing of data. To the best of our capabilities, we ensure that third-party systems we use are GDPR compliant. Please contact us on the details outlined above in section 1 should you require more information on the systems used.Third party Websites Occasionally, we may provide links to other websites for your convenience and information. This privacy policy does not cover the links within our websites linking to other websites. We are not responsible for such other website/s and/or any products or services they may offer. It is your responsibility to check how these websites treat your personal data and we encourage you to read the privacy statements on the other websites you visit.</p>
          </div>
        </div>

        <div class="single-privacy-content" :class="{ open: (setContent.includes('14')) }">
          <div class="single-privacy-upper" id="14" @click="selectContent">
            <h3 class="single-privacy-title">14. Third Party Personal Data</h3>

            <div class="open-button" :class="{ minus: (setContent.includes('14')) }">
              <span></span><span></span>
            </div>
          </div>

          <div class="single-privacy-details post-content">
            <p>In those cases where you provide to us personal data on third parties, you warrant that prior to processing or transferring any personal data to us, you would have obtained consent for such processing or transfer from the third party and can therefore lawfully provide such data to us. You shall indemnify and keep indemnified the firm to the full extent permitted at law against any loss or damage incurred by us, in relation to this.</p>
          </div>
        </div>

        <div class="single-privacy-content" :class="{ open: (setContent.includes('15')) }">
          <div class="single-privacy-upper" id="15" @click="selectContent">
            <h3 class="single-privacy-title">15. Protection of Personal Data</h3>

            <div class="open-button" :class="{ minus: (setContent.includes('15')) }">
              <span></span><span></span>
            </div>
          </div>

          <div class="single-privacy-details post-content">
            <p>We undertake reasonable efforts to ensure that any personal data we hold/process is safeguarded from unauthorised access, improper use/disclosure, and/or accidental loss or unlawful destruction. We however cannot guarantee such will not occur. We operate IT and managerial security policies and procedures to protect personal data which are regularly reviewed and kept up to date. To the best of our capabilities, we undertake reasonable efforts to carefully select the systems we use and third parties we will collaborate with and ensure that these operate privacy policies, security procedures, rules and IT organisational measures that are in line with GDPR requirements.</p>
          </div>
        </div>

        <div class="single-privacy-content" :class="{ open: (setContent.includes('16')) }">
          <div class="single-privacy-upper" id="16" @click="selectContent">
            <h3 class="single-privacy-title">16. Your Rights</h3>

            <div class="open-button" :class="{ minus: (setContent.includes('16')) }">
              <span></span><span></span>
            </div>  
          </div>

          <div class="single-privacy-details post-content">
            <p>Your principal rights under data protection law are:</p>

            <ul class="custom-list">
              <li><p>right to be informed about the personal non-public data we collect and how we process it - this policy aims at providing you with this information;</p></li>
              <li><p>right to access – you have the right to obtain confirmation that your personal non-public data is being processed and have the ability to access it;</p></li>
              <li><p>right to modification – you have the right to request the modification of any personal non-public data we hold on you if it is incorrect or incomplete;</p></li>
              <li><p>right of portability – you may ask us to forward to you the personal data we hold on you and which is portable at law in a structured, commonly used and machine-readable format or to transmit that data to another data controller, where it is technically feasible to do so</p></li>
              <li><p>right to erasure – you have the right to request the removal of your personal data, which shall be deleted, unless there is a legal requirement or reason for us to continue processing or storing it;</p></li>
              <li><p>right to restrict processing – you have a right to restrict or withdraw consent to the processing of your personal data. In such cases we are permitted to store your data, but not to process it further unless there is a legal requirement or reason for us to continue processing it;</p></li>
              <li><p>right to object to processing for specific reasons at law, being the following:<br>
                a. processing based on legitimate interests or the performance of a task in the public interest or in the exercise of official authority,<br>
                b. direct marketing, including profiling to the extent that it is related to such marketing activities,<br>
                c. processing for scientific or historical research purposes or for the purpose of statistics; and
              </p></li>
              <li><p>right to file a complaint with supervisory authorities if your information has not been processed in compliance with GDPR.</p></li>
            </ul>
          </div>
        </div>

        <div class="single-privacy-content" :class="{ open: (setContent.includes('17')) }">
          <div class="single-privacy-upper" id="17" @click="selectContent">
            <h3 class="single-privacy-title">17. Changes to this Privacy Policy</h3>

            <div class="open-button" :class="{ minus: (setContent.includes('17')) }">
              <span></span><span></span>
            </div>
          </div>

          <div class="single-privacy-details post-content">
            <p>We keep our privacy policy under regular review. If any change in this privacy policy is significant and will affect the way we collect or process any personal data, you will be provided with prior notice via email. A notice on our website will be uploaded in cases of other changes not deemed significant. Your continued use of services or websites after any change to this privacy notice will constitute your acceptance of such change.</p>
          </div>
        </div>

        <div class="single-privacy-content" :class="{ open: (setContent.includes('18')) }">
          <div class="single-privacy-upper" id="18" @click="selectContent">
            <h3 class="single-privacy-title">18. Approval and Review</h3>

            <div class="open-button" :class="{ minus: (setContent.includes('18')) }">
              <span></span><span></span>
            </div>
          </div>

          <div class="single-privacy-details post-content">
            <p>This policy has been approved by the board of directors/partners without change on the 1st of August 2020. This policy will be reviewed when necessary and at least on an annual basis.</p>
          </div>
        </div>
      </div>
    </section>

  </main>
</template>

<script>
export default {
  transition: 'slide-bottom',
  data() {
    return {
      // setContent is an array so that it can handle multiple numbers for multiple sections open
      setContent: [],
      isMobile: false,
    }
  },
  // The Nuxt provider to change the page title
  head() {
    return {
      title: '56Bit - Privacy Policy',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: '56Bit delivers best-practice cloud expertise to organisations of any size'
        }
      ]
    }
  },
  methods: {
    // Method that gains id of div on click through the event and if the condition of isMobile is successful, then execute
    selectContent(event) {
      if(this.isMobile == true){
          // If the array includes the id number gained, then execute the below
          if(this.setContent.includes(event.currentTarget.id)){
            // Get the key value of the the id number which is already existing in the array
            var valueIndex = this.setContent.indexOf(event.currentTarget.id)
            if(valueIndex >= 0){
              // Remove the value from the array so that the section closes
              this.setContent.splice(valueIndex, 1)
            }
          }else{
            // setFounder variable is set to the id and then the condition is met to open on mobile
            this.setContent.push(event.currentTarget.id)
          }
      }
    },
    // Method called when window resize is triggered from mounted
    getWindowWidth() {
      // If true that the width of the window is less than 992, set #VAR3 to true and return
      if(window.innerWidth < 768){
        this.isMobile = true
        return
      }
      // Else set #VAR3 to false
      this.isMobile = false
    }
  },
  mounted() {
    // On window resize and load, execute method getWindowWidth
    window.addEventListener('resize', this.getWindowWidth)
    window.addEventListener('load', this.getWindowWidth)
  },
  created() {
    this.getWindowWidth()
  }
}
</script>