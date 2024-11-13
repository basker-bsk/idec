import React from "react";

function page() {
  return (
    <div className="flex flex-col h-full justify-between">
      <div className="flex flex-col text-14">
        <div className="flex justify-end pb-4">
          <img src="images/hdfclogo.png" />
        </div>
        <div className=" w-full flex gap-2 flex-col">
          <div className="flex items-start">
            <div className="w-3/12">Date : 10/11/2024</div>
            <div className="flex flex-col justify-center w-7/12 text-center ">
              <p className="">TO WHOMSOEVER IT MAY CONCERN</p>
              <p>----------------------------</p>
            </div>
          </div>
          <div className="flex">
            <p className="text-center">
              TYPE : 571- RESIDENT HOME LOAN-VARIABLE RATE-MONTHLY RES{" "}
            </p>
          </div>
          <p className="flex">
            PROVISIONAL STATEMENT for claiming deduction under Sections 24(b) &
            80C of the INCOME-TAX ACT,1961 for the period 01/04/2024 to
            31/03/2025
          </p>
          <div className="flex">
            <div className="pr-4">This is to certify that </div>
            <div className="flex flex-col">
              <p>MR BASKER S</p>
              <p>MRS SARANYA BASKER</p>
            </div>
          </div>
          <div className="flex flex-col text-14">
            <p className="">
              (Loan account number 613213672) has/have been granted a HOUSING
              LOAN of Rs. 29,00,000 @8.95% per annum* in respect of the
              following property :
            </p>
            <p>
              FLAT NO B18, SECOND FLOOR,MAYFAIR APARTMENTS,R.S.NO
              67/2PT,THALAMBUR VILLAGE,CHENGALPATTU TALUK,KANCHEEPURAM-600119
            </p>
          </div>
          <p className="flex">
            The above loan is REPAYABLE in Equated Monthly Instalments (EMIs)
            comprising Principal and Interest. The total amount of EMIs payable
            from 01/04/2024 to 31/03/2025 is Rs. 6,00,000.00. The break-up of
            the amount into Principal and Interest is given below :
          </p>
          <div className="flex px-10 justify-between w-10/12 pb-10">
            <div className="flex flex-col">
              <p>PRINCIPAL COMPONENT</p>
              <p>INTEREST COMPONENT</p>
            </div>
            <div className="flex flex-col ">
              <p className="flex gap-8">
                <span>Rs.</span>4,21,225.00
              </p>
              <p className="flex gap-8">
                <span>Rs.</span>1,78,775.00
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <p className="pl-6">NOTES :</p>
            <ol className="flex flex-col list-decimal pl-6">
              <li>
                Interest is calculated on monthly rests. Principal repayments
                are credited at the end of each month.
              </li>
              <li>
                Interest and Principal figures are subject to change in case of
                prepayment/s and/or change in repayment schedule.
              </li>
              <li>
                Principal repayments through EMIs and/or Prepayments qualify for
                deduction under Section 80C,if the amounts are ACTUALLY PAID by
                31/03/2025.
              </li>
              <li>
                Deduction under Section 80C can be claimed only if :
                <div className="">
                  <div>
                    (i) The repayment of the loan is made out of income
                    chargeable to tax and
                  </div>
                  <div>
                    (ii) The property for which the loan is taken is not
                    transferred before the expiry of 5 years from the end of the
                    financial year in which the possession of such property is
                    obtained.
                  </div>
                  <div>THESE CONDITIONS HAVE NOT BEEN VERIFIED BY HDFC.</div>
                </div>
              </li>
              <li>
                Interest payable on the loan ( including Pre-EMI Interest, if
                any ) is allowed as a deduction under Section 24(b).
              </li>
            </ol>
          </div>

          <div className="flex">
            THIS STATEMENT BEING PROVISIONAL IN NATURE REQUIRES NO AUTHORISATION
            FROM HOUSING DEVELOPMENT FINANCE CORPORATION LIMITED (PAN:
            AAACH0997E)
          </div>
        </div>
      </div>
      <div className="flex text-[13px] flex-col pt-20">
        <p>613213672 </p>
        <p>MR BASKER S</p>
        <p>14/6, 3RD STREET,</p>
        <p>CHINNAMETTU PALAIYAM, KALADIPET,</p>
        <p>CHENNAI-600019</p>
        <div className="text-center text-12 pt-5">
          <p>
            Regd. Office: Ramon House, H T Parekh Marg, 169, Backbay
            Reclamation, Churchgate, Mumbai 400 020.
          </p>
          <p>
            Tel: 66316000, 22820282. Fax: 022-22811205, 22046834, 22046758.,CIN:
            L70100MH1977PLC019916
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
