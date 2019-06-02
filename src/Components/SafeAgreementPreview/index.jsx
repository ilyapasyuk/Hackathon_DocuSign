import React, { useState, useRef } from 'react'
import { Grid, Paper, TextField, InputAdornment, Button } from '@material-ui/core'
import SignatureCanvas from 'react-signature-canvas'
import domtoimage from 'dom-to-image'
import { saveAs } from 'file-saver'
import './style.css'

const SafeAgreementPreview = ({ options }) => {
    const [investorName, setInvestorName] = useState('Name investor')
    const [companyName, setCompanyName] = useState('Company legal name')
    const [funding, setFunding] = useState(0)
    const [postFunding, setPostFunding] = useState(0)
    const [safeDate, setSafeDate] = useState('2020-01-01')
    const [investorSign, setInvestorSign] = useState(null)
    const [companySign, setCompanySign] = useState(null)

    const investorSignHandlerRef = useRef(null)
    const companySignHandlerRef = useRef(null)

    function setInvestorSignHandler() {
        setInvestorSign(investorSignHandlerRef.current.getTrimmedCanvas().toDataURL('image/png'))
    }

    function setCompanySignHandler() {
        setCompanySign(companySignHandlerRef.current.getTrimmedCanvas().toDataURL('image/png'))
    }

    function saveImage() {
        domtoimage.toBlob(document.getElementById('preview')).then(blob => {
            saveAs(blob, 'document.png')
        })
    }

    return (
        <Grid container spacing={3}>
            <Grid item xs={4}>
                <TextField
                    id="outlined-name"
                    label="Name investor"
                    fullWidth
                    value={investorName}
                    onChange={e => setInvestorName(e.target.value)}
                    margin="normal"
                    variant="outlined"
                    placeholder="Type in name of Investor | example: FUND Inc."
                />
                <TextField
                    id="outlined-name"
                    label="Amount of funding in USD"
                    fullWidth
                    value={funding}
                    onChange={e => setFunding(e.target.value)}
                    margin="normal"
                    type="number"
                    variant="outlined"
                    placeholder="Type in amount of funding in USD | example: 1000000"
                    InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    }}
                />
                <TextField
                    id="outlined-name"
                    label="Post-money in USD"
                    fullWidth
                    value={postFunding}
                    onChange={e => setPostFunding(e.target.value)}
                    margin="normal"
                    type="number"
                    variant="outlined"
                    placeholder="Type in post-money valuation cap in USD | example: 10000000"
                    InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    }}
                />
                <TextField
                    id="outlined-name"
                    label="Company legal name"
                    fullWidth
                    value={companyName}
                    onChange={e => setCompanyName(e.target.value)}
                    margin="normal"
                    variant="outlined"
                    placeholder="Type in your company legal name I example: Company LLC"
                />
                <TextField
                    id="outlined-name"
                    label="Date of SAFE"
                    fullWidth
                    value={safeDate}
                    onChange={e => setSafeDate(e.target.value)}
                    margin="normal"
                    variant="outlined"
                    placeholder="Type in date of SAFE"
                    type="date"
                    defaultValue="2019-05-24"
                />
                <br />
                <Paper className="SafeAgreementPreview__sign">
                    Investor sign
                    <SignatureCanvas
                        penColor="black"
                        canvasProps={{
                            width: 300,
                            height: 200,
                        }}
                        ref={investorSignHandlerRef}
                        onEnd={setInvestorSignHandler}
                        backgroundColor="rgba(255,255,255,1)"
                    />
                </Paper>
                <br />
                <Paper className="SafeAgreementPreview__sign">
                    Company sign
                    <SignatureCanvas
                        penColor="black"
                        canvasProps={{
                            width: 300,
                            height: 200,
                        }}
                        ref={companySignHandlerRef}
                        onEnd={setCompanySignHandler}
                        backgroundColor="rgba(255,255,255,1)"
                    />
                </Paper>
                <br />
                <Button
                    fullWidth
                    variant="contained"
                    color="secondary"
                    onClick={() => saveImage()}
                    size="large"
                >
                    Save document
                </Button>
            </Grid>
            <Grid item xs={8}>
                <Paper className="SafeAgreementPreview__preview" id="preview">
                    <p>
                        THIS INSTRUMENT AND ANY SECURITIES ISSUABLE PURSUANT HERETO HAVE NOT BEEN
                        REGISTERED UNDER THE SECURITIES ACT OF 1933, AS AMENDED (THE “SECURITIES
                        ACT”), OR UNDER THE SECURITIES LAWS OF CERTAIN STATES. THESE SECURITIES MAY
                        NOT BE OFFERED, SOLD OR OTHERWISE TRANSFERRED, PLEDGED OR HYPOTHECATED
                        EXCEPT AS PERMITTED IN THIS SAFE AND UNDER THE ACT AND APPLICABLE STATE
                        SECURITIES LAWS PURSUANT TO AN EFFECTIVE REGISTRATION STATEMENT OR AN
                        EXEMPTION THEREFROM.
                    </p>
                    <p>
                        <b>SAFE(Simple Agreement for Future Equity)</b>
                    </p>
                    THIS CERTIFIES THAT in exchange for the payment by{' '}
                    <span className="SafeAgreementPreview__highlight">
                        {investorName && investorName}
                    </span>{' '}
                    (the “Investor”) of{' '}
                    <span className="SafeAgreementPreview__highlight">$ {funding && funding}</span>{' '}
                    <span className="SafeAgreementPreview__highlight">
                        {companyName && companyName}
                    </span>{' '}
                    (the “Purchase Amount”) on or about{' '}
                    <span className="SafeAgreementPreview__highlight">{safeDate && safeDate}</span>{' '}
                    ,{' '}
                    <span className="SafeAgreementPreview__highlight">
                        {companyName && companyName}
                    </span>{' '}
                    its affiliates and subsidiaries (the “Company”), issues to the Investor the
                    right to certain shares of Company’s Capital Stock, subject to the terms
                    described below.
                    <p>
                        The “Post-Money Valuation Cap” is ${' '}
                        <span className="SafeAgreementPreview__highlight">
                            $ {postFunding && postFunding}
                        </span>
                    </p>
                    <p>See Section 2 for certain additional defined terms.</p>
                    <ol style={{ listStyleType: 'decimal', lineHeight: 1.5 }}>
                        <li>
                            Events Equity
                            <ol>
                                <li>
                                    <p>
                                        Events Equity Financing. If there is an Equity Financing
                                        before the termination of this Safe, on the initial closing
                                        of such Equity Financing, this Safe will automatically
                                        convert into the number of shares of Standard Preferred
                                        Stock equal to the Purchase Amount divided by the lowest
                                        price per share of the Standard Preferred Stock.
                                    </p>
                                    <p>
                                        In connection with the automatic conversion of this Safe
                                        into shares of Standard Preferred Stock equal to the
                                        Purchase Amount divided by the lowest price per share of the
                                        Standard Preferred Stock, the Investor will execute and
                                        deliver to Company all of the transaction documents related
                                        to the Equity Financing; provided, that such documents are
                                        the same documents to be entered into with the purchasers of
                                        Standard Preferred Stock, and provided further, that such
                                        documents have customary exceptions to any drag-along
                                        applicable to the Investor, including, without limitation,
                                        limited representations and warranties and limited liability
                                        and indemnification obligations on the part of the Investor.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Liquidity Event. If there is a Liquidity Event before the
                                        termination of this Safe, this Safe will automatically be
                                        entitled to receive a portion of Proceeds, due and payable
                                        to the Investor immediately prior to, or concurrent with,
                                        the consummation of such Liquidity Event, equal to the
                                        greater of (i) the Purchase Amount (the “Cash-Out Amount”)
                                        or (ii) the amount payable on the number of shares of Common
                                        Stock equal to the Purchase Amount divided by the Liquidity
                                        Price (the “Conversion Amount”). If any of Company’s
                                        securityholders are given a choice as to the form and amount
                                        of Proceeds to be received in a Liquidity Event, the
                                        Investor will be given the same choice, provided that the
                                        Investor may not choose to receive a form of consideration
                                        that the Investor would be ineligible to receive as a result
                                        of the Investor’s failure to satisfy any requirement or
                                        limitation generally applicable to Company’s
                                        securityholders, or under any applicable laws.
                                    </p>
                                    <p>
                                        Notwithstanding the foregoing, in connection with a Change
                                        of Control intended to qualify as a tax-free reorganization,
                                        Company may reduce the cash portion of Proceeds payable to
                                        the Investor by the amount determined by its board of
                                        directors in good faith for such Change of Control to
                                        qualify as a tax-free reorganization for U.S. federal income
                                        tax purposes, provided that such reduction (A) does not
                                        reduce the total Proceeds payable to such Investor and (B)
                                        is applied in the same manner and on a pro rata basis to all
                                        securityholders who have equal priority to the Investor
                                        under Section 1(d).
                                    </p>
                                </li>
                                <li>
                                    Dissolution Event. If there is a Dissolution Event before the
                                    termination of this Safe, the Investor will automatically be
                                    entitled to receive a portion of Proceeds equal to the Cash-Out
                                    Amount, due and payable to the Investor immediately prior to the
                                    consummation of the Dissolution Event.
                                </li>
                                <li>
                                    Liquidation Priority. In a Liquidity Event or Dissolution Event,
                                    this Safe is intended to operate like standard non-participating
                                    Preferred Stock. The Investor’s right to receive its Cash-Out
                                    Amount is:
                                    <ol>
                                        <li>
                                            Junior to payment of outstanding indebtedness and
                                            creditor claims, including contractual claims for
                                            payment and convertible promissory notes (to the extent
                                            such convertible promissory notes are not actually or
                                            notionally converted into Capital Stock);
                                        </li>
                                        <li>
                                            On par with payments for other Safes and/or Preferred
                                            Stock, and if the applicable Proceeds are insufficient
                                            to permit full payments to the Investor and such other
                                            Safes and/or Preferred Stock, the applicable Proceeds
                                            will be distributed pro rata to the Investor and such
                                            other Safes and/or Preferred Stock in proportion to the
                                            full payments that would otherwise be due; and
                                        </li>
                                        <li>
                                            Senior to payments for Common Stock. The Investor’s
                                            right to receive its Conversion Amount is (A) on par
                                            with payments for Common Stock and other Safes and/or
                                            Preferred Stock who are also receiving Conversion
                                            Amounts or Proceeds on a similar as-converted to Common
                                            Stock basis, and (B) junior to payments described in
                                            clauses (i) and (ii) above (in the latter case, to the
                                            extent such payments are Cash-Out Amounts or similar
                                            liquidation preferences).
                                        </li>
                                        <li>
                                            Termination. This Safe will automatically terminate
                                            (without relieving Company of any obligations arising
                                            from a prior breach of or non-compliance with this Safe)
                                            immediately following the earliest to occur of: (i) the
                                            issuance of Capital Stock to the Investor pursuant to
                                            the automatic conversion of this Safe under Section
                                            1(a); or (ii) the payment, or setting aside for payment,
                                            of amounts due the Investor pursuant to Section 1(b) or
                                            Section 1(c).
                                        </li>
                                    </ol>
                                </li>
                            </ol>
                        </li>
                        <li>
                            Definitions
                            <p>
                                “Capital Stock” means the capital stock of Company, including,
                                without limitation, the “Common Stock” and the “Preferred Stock”.
                            </p>
                            <p>
                                “Change of Control” means (i) a transaction or series of related
                                transactions in which any “person” or “group” (within the meaning of
                                Section 13(d) and 14(d) of the Securities Exchange Act of 1934, as
                                amended), becomes the “beneficial owner” (as defined in Rule 13d-3
                                under the Securities Exchange Act of 1934, as amended), directly or
                                indirectly, of more than 50% of the outstanding voting securities of
                                Company having the right to vote for the election of members of
                                Company’s board of directors, (ii) any reorganization, merger or
                                consolidation of Company, other than a transaction or series of
                                related transactions in which the holders of the voting securities
                                of Company outstanding immediately prior to such transaction or
                                series of related transactions retain, immediately after such
                                transaction or series of related transactions, at least a majority
                                of the total voting power represented by the outstanding voting
                                securities of Company or such other surviving or resulting entity or
                                (iii) a sale, lease or other disposition of all or substantially all
                                of the assets of Company.
                            </p>
                            <p>
                                “Dissolution Event” means (i) a voluntary termination of operations,
                                (ii) a general assignment for the benefit of Company’s creditors or
                                (iii) any other liquidation, dissolution or winding up of Company
                                (excluding a Liquidity Event), whether voluntary or involuntary.
                            </p>
                            <p>
                                “Dividend Amount” means, with respect to any date on which Company
                                pays a dividend on its outstanding Common Stock, the amount of such
                                dividend that is paid per share of Common Stock multiplied by (x)
                                the Purchase Amount divided by (y) the Liquidity Price (treating the
                                dividend date as a Liquidity Event solely for purposes of
                                calculating such Liquidity Price).
                            </p>
                            <p>
                                “Equity Financing” means a bona fide transaction or series of
                                transactions with the principal purpose of raising capital, pursuant
                                to which Company issues and sells Preferred Stock at a fixed
                                valuation, including but not limited to, a pre-money or post-money
                                valuation.
                            </p>
                            <p>
                                “Initial Public Offering” means the closing of Company’s first firm
                                commitment underwritten initial public offering of Common Stock
                                pursuant to a registration statement filed under the Securities Act.
                            </p>
                            <p>
                                “Liquidity Event” means a Change of Control or an Initial Public
                                Offering.
                            </p>
                            <p>
                                “Liquidity Price” means the fair market value of the Common Stock at
                                the time of the applicable Liquidity Event (determined by reference
                                to the purchase price payable in connection with such Liquidity
                                Event).
                            </p>
                            <p>
                                “Proceeds” means cash and other assets (including without limitation
                                stock consideration) that are proceeds from the Liquidity Event or
                                the Dissolution Event, as applicable, and legally available for
                                distribution.
                            </p>
                            <p>
                                “Safe” means an instrument containing a future right to shares of
                                Capital Stock, similar in form and content to this instrument,
                                purchased by investors for the purpose of funding Company’s business
                                operations. References to “this Safe” mean this specific instrument.
                            </p>
                            <p>
                                “Standard Preferred Stock” means the shares of the series of
                                Preferred Stock issued to the investors investing new money in
                                Company in connection with the initial closing of the Equity
                                Financing.
                            </p>
                            <p>
                                “Subsequent Convertible Securities” means convertible securities
                                that Company may issue after the issuance of this instrument with
                                the principal purpose of raising capital, including but not limited
                                to, other Safes, convertible debt instruments and other convertible
                                securities. Subsequent Convertible Securities excludes: (i) options
                                issued pursuant to any equity incentive or similar plan of Company;
                                (ii) convertible securities issued or issuable to (A) banks,
                                equipment lessors, financial institutions or other persons engaged
                                in the business of making loans pursuant to a debt financing or
                                commercial leasing or (B) suppliers or third party service providers
                                in connection with the provision of goods or services pursuant to
                                transactions; and (iii) convertible securities issued or issuable in
                                connection with sponsored research, collaboration, technology
                                license, development, OEM, marketing or other similar agreements or
                                strategic partnerships.
                            </p>
                        </li>
                        <li>
                            “MFN” Amendment Provision. If Company issues any Subsequent Convertible
                            Securities prior to termination of this Safe, Company will promptly
                            provide the Investor with written notice thereof, together with a copy
                            of all documentation relating to such Subsequent Convertible Securities
                            and, upon written request of the Investor, any additional information
                            related to such Subsequent Convertible Securities as may be reasonably
                            requested by the Investor. In the event the Investor determines that the
                            terms of the Subsequent Convertible Securities are preferable to the
                            terms of this instrument, the Investor will notify Company in writing.
                            Promptly after receipt of such written notice from the Investor, Company
                            agrees to amend and restate this instrument to be identical to the
                            instrument(s) evidencing the Subsequent Convertible Securities.
                        </li>
                        <li>
                            Company Representations
                            <ol>
                                <li>
                                    Company is a corporation duly organized, validly existing and in
                                    good standing under the laws of its state of incorporation, and
                                    has the power and authority to own, lease and operate its
                                    properties and carry on its business as now conducted.
                                </li>
                                <li>
                                    The execution, delivery and performance by Company of this Safe
                                    is within the power of Company and has been duly authorized by
                                    all necessary actions on the part of Company (subject to section
                                    3(d)). This Safe constitutes a legal, valid and binding
                                    obligation of Company, enforceable against Company in accordance
                                    with its terms, except as limited by bankruptcy, insolvency or
                                    other laws of general application relating to or affecting the
                                    enforcement of creditors’ rights generally and general
                                    principles of equity. To its knowledge, Company is not in
                                    violation of (i) its current certificate of incorporation or
                                    bylaws, (ii) any material statute, rule or regulation applicable
                                    to Company or (iii) any material debt or contract to which
                                    Company is a party or by which it is bound, where, in each case,
                                    such violation or default, individually, or together with all
                                    such violations or defaults, could reasonably be expected to
                                    have a material adverse effect on Company.
                                </li>
                                <li>
                                    The performance and consummation of the transactions
                                    contemplated by this Safe do not and will not: (i) violate any
                                    material judgment, statute, rule or regulation applicable to
                                    Company; (ii) result in the acceleration of any material debt or
                                    contract to which Company is a party or by which it is bound; or
                                    (iii) result in the creation or imposition of any lien on any
                                    property, asset or revenue of Company or the suspension,
                                    forfeiture, or nonrenewal of any material permit, license or
                                    authorization applicable to Company, its business or operations.
                                </li>
                                <li>
                                    No consents or approvals are required in connection with the
                                    performance of this Safe, other than: (i) Company’s corporate
                                    approvals; (ii) any qualifications or filings under applicable
                                    securities laws; and (iii) necessary corporate approvals for the
                                    authorization of Capital Stock issuable pursuant to Section 1.
                                </li>
                                <li>
                                    To its knowledge, Company owns or possesses (or can obtain on
                                    commercially reasonable terms) sufficient legal rights to all
                                    patents, trademarks, service marks, trade names, copyrights,
                                    trade secrets, licenses, information, processes and other
                                    intellectual property rights necessary for its business as now
                                    conducted and as currently proposed to be conducted, without any
                                    conflict with, or infringement of the rights of, others.
                                </li>
                            </ol>
                        </li>
                        <li>
                            Investor Representation
                            <ol>
                                <li>
                                    The Investor has full legal capacity, power and authority to
                                    execute and deliver this Safe and to perform its obligations
                                    hereunder. This Safe constitutes valid and binding obligation of
                                    the Investor, enforceable in accordance with its terms, except
                                    as limited by bankruptcy, insolvency or other laws of general
                                    application relating to or affecting the enforcement of
                                    creditors’ rights generally and general principles of equity.
                                </li>
                                <li>
                                    The Investor is an accredited investor as such term is defined
                                    in Rule 501 of Regulation D under the Securities Act, and
                                    acknowledges and agrees that if not an accredited investor at
                                    the time of an Equity Financing, Company may void this Safe and
                                    return the Purchase Amount. The Investor has been advised that
                                    this Safe and the underlying securities have not been registered
                                    under the Securities Act, or any state securities laws and,
                                    therefore, cannot be resold unless they are registered under the
                                    Securities Act and applicable state securities laws or unless an
                                    exemption from such registration requirements is available. The
                                    Investor is purchasing this Safe and the securities to be
                                    acquired by the Investor hereunder for its own account for
                                    investment, not as a nominee or agent, and not with a view to,
                                    or for resale in connection with, the distribution thereof, and
                                    the Investor has no present intention of selling, granting any
                                    participation in, or otherwise distributing the same. The
                                    Investor has such knowledge and experience in financial and
                                    business matters that the Investor is capable of evaluating the
                                    merits and risks of such investment, is able to incur a complete
                                    loss of such investment without impairing the Investor’s
                                    financial condition and is able to bear the economic risk of
                                    such investment for an indefinite period of time.
                                </li>
                            </ol>
                        </li>
                        <li>
                            Miscellaneous
                            <ol>
                                <li>
                                    Any provision of this Safe may be amended, waived or modified by
                                    written consent of Company and either (i) the Investor or (ii)
                                    the majority-in-interest of all then-outstanding Safes with the
                                    same “Post-Money Valuation Cap” and “Discount Rate” as this Safe
                                    (and Safes lacking one or both of such terms will be considered
                                    to be the same with respect to such term(s)), provided that with
                                    respect to clause (ii): (A) the Purchase Amount may not be
                                    amended, waived or modified in this manner, (B) the consent of
                                    the Investor and each holder of such Safes must be solicited
                                    (even if not obtained), and (C) such amendment, waiver or
                                    modification treats all such holders in the same manner.
                                    “Majority-in-interest” refers to the holders of the applicable
                                    group of Safes whose Safes have a total Purchase Amount greater
                                    than 50% of the total Purchase Amount of all of such applicable
                                    group of Safes.
                                </li>
                                <li>
                                    Any notice required or permitted by this Safe will be deemed
                                    sufficient when delivered personally or by overnight courier or
                                    sent by email to the relevant address listed on the signature
                                    page, or 48 hours after being deposited in the U.S. mail as
                                    certified or registered mail with postage prepaid, addressed to
                                    the party to be notified at such party’s address listed on the
                                    signature page, as subsequently modified by written notice.
                                </li>
                                <li>
                                    The Investor is not entitled, as a holder of this Safe, to vote
                                    or be deemed a holder of Capital Stock for any purpose other
                                    than tax purposes, nor will anything in this Safe be construed
                                    to confer on the Investor, as such, any rights of a Company
                                    stockholder or rights to vote for the election of directors or
                                    on any matter submitted to Company stockholders, or to give or
                                    withhold consent to any corporate action or to receive notice of
                                    meetings, until shares have been issued on the terms described
                                    in Section 1. However, if Company pays a dividend on outstanding
                                    shares of Common Stock (that is not payable in shares of Common
                                    Stock) while this Safe is outstanding, Company will pay the
                                    Dividend Amount to the Investor at the same time.
                                </li>
                                <li>
                                    Neither this Safe nor the rights in this Safe are transferable
                                    or assignable, by operation of law or otherwise, by either party
                                    without the prior written consent of the other; provided,
                                    however, that this Safe and/or its rights may be assigned
                                    without Company’s consent by the Investor to any other entity
                                    who directly or indirectly, controls, is controlled by or is
                                    under common control with the Investor, including, without
                                    limitation, any general partner, managing member, officer or
                                    director of the Investor, or any venture capital fund now or
                                    hereafter existing which is controlled by one or more general
                                    partners or managing members of, or shares the same management
                                    company with, the Investor; and provided, further, that Company
                                    may assign this Safe in whole, without the consent of the
                                    Investor, in connection with a reincorporation to change
                                    Company’s domicile.
                                </li>
                            </ol>
                        </li>
                        <li>
                            In the event any one or more of the provisions of this Safe is for any
                            reason held to be invalid, illegal or unenforceable, in whole or in part
                            or in any respect, or in the event that any one or more of the
                            provisions of this Safe operate or would prospectively operate to
                            invalidate this Safe, then and in any such event, such provision(s) only
                            will be deemed null and void and will not affect any other provision of
                            this Safe and the remaining provisions of this Safe will remain
                            operative and in full force and effect and will not be affected,
                            prejudiced, or disturbed thereby.
                        </li>
                        <li>
                            All rights and obligations hereunder will be governed by the laws of the
                            State of California, without regard to the conflicts of law provisions
                            of such jurisdiction.{' '}
                        </li>
                        <li>
                            The parties acknowledge and agree that for United States federal and
                            state income tax purposes this Safe is, and at all times has been,
                            intended to be characterized as stock, and more particularly as common
                            stock for purposes of Sections 304, 305, 306, 354, 368, 1036 and 1202 of
                            the Internal Revenue Code of 1986, as amended. Accordingly, the parties
                            agree to treat this Safe consistent with the foregoing intent for all
                            United States federal and state income tax purposes (including, without
                            limitation, on their respective tax returns or other informational
                            statements).
                        </li>
                    </ol>
                    [Signature page follows] IN WITNESS WHEREOF, the undersigned have caused this
                    Safe to be duly executed and delivered.
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <span className="SafeAgreementPreview__highlight">
                                {companyName && companyName}
                            </span>
                            {companySign && (
                                <p>
                                    <img src={companySign} alt="" />
                                </p>
                            )}
                            <br /> By:___________________________
                            <br />
                            Name:_____________________ <br />
                            Title:_____________________
                            <br />
                            Address:_____________________
                        </Grid>
                        <Grid item xs={6}>
                            <span className="SafeAgreementPreview__highlight">
                                {investorName && investorName}
                            </span>
                            {investorSign && (
                                <p>
                                    <img src={investorSign} alt="" />
                                </p>
                            )}
                            <br /> By:___________________________
                            <br />
                            Name:_____________________ <br />
                            Title:_____________________
                            <br />
                            Address:_____________________
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default SafeAgreementPreview
