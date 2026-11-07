// Generated from the crew's page by trusted code (T-0914); edit the page, not this file.
import facts from "@/app/content.json";
import Reveal from "@/components/kit/Reveal";
import Compare from "@/components/Compare";
import Decisions from "@/components/Decisions";
import Scorer from "@/components/Scorer";

export default function Page() {
  return (
    <>
      <meta name="description" content={"Trust Ledger is a working prototype scorer that counts a small trader's cash into a defensible risk score, for fintech and analytics teams and customers in Rwanda. Data stays on this device."} />
      <meta property="og:title" content={"Trust Ledger — a working scorer for borrowers with no tangible collateral"} />
      <meta property="og:description" content={"Count one small trader's cash into a defensible risk score. A working prototype for fintech and analytics teams and customers in Rwanda; data stays on this device."} />
      <title>
        Trust Ledger — a working scorer for borrowers with no tangible collateral
      </title>
      <a className="skip" href="#main">
        Skip to content
      </a>
      {"\n"}
      <header className="masthead">
        {"\n"}
        <div className="container masthead__row">
          {"\n"}
          <a className="brand" href="#top">
            {"\n"}
            <svg className="brand__mark" viewBox="0 0 40 40" aria-hidden="true" focusable="false">
              {"\n"}
              <rect x="4" y="4" width="32" height="32" rx="6" fill="none" stroke="currentColor" strokeWidth="2.5"></rect>
              {"\n"}
              <line x1="11" y1="15" x2="29" y2="15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"></line>
              {"\n"}
              <line x1="11" y1="21" x2="29" y2="21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"></line>
              {"\n"}
              <line x1="11" y1="27" x2="22" y2="27" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"></line>
              {"\n"}
            </svg>
            {"\n"}
            <span className="brand__name">
              Trust Ledger
            </span>
            {"\n"}
          </a>
          {"\n"}
          <nav className="masthead__nav" aria-label="Sections">
            {"\n"}
            <a href="#problem">
              Problem
            </a>
            {"\n"}
            <a href="#features">
              Features
            </a>
            {"\n"}
            <a href="#caveats">
              Caveats
            </a>
            {"\n"}
            <a href="#source">
              Source
            </a>
            {"\n"}
          </nav>
          {"\n"}
        </div>
        {"\n"}
      </header>
      {"\n"}
      <main id="main">
        {"\n"}
        <span id="top"></span>
        {"\n"}
        <section className="hero" aria-labelledby="hero-title">
          {"\n"}
          <div className="container">
            {"\n"}
            <Reveal order={0}>
              {"\n"}
              <p className="eyebrow">
                Working prototype · data stays on this device
              </p>
              {"\n"}
            </Reveal>
            {"\n"}
            <Reveal order={1}>
              {"\n"}
              <h1 id="hero-title">
                A defensible risk score for borrowers with no tangible collateral.
              </h1>
              {"\n"}
            </Reveal>
            {"\n"}
            <Reveal order={2}>
              {"\n"}
              <p className="lede">
                Trust Ledger counts one small trader’s cash into a risk score you can defend. It is a working scorer, not a brochure — open it and count a trader.
              </p>
              {"\n"}
            </Reveal>
            {"\n"}
            <Reveal order={3}>
              {"\n"}
              <a className="cta" href="#scorer">
                Open the scorer
              </a>
              {"\n"}
            </Reveal>
            {"\n"}
          </div>
          {"\n"}
        </section>
        {"\n"}
        <section className="problem" id="problem" aria-labelledby="problem-title">
          {"\n"}
          <div className="container">
            {"\n"}
            <div className="section-head">
              {"\n"}
              <p className="eyebrow">
                The problem
              </p>
              {"\n"}
              <h2 id="problem-title">
                Collateral shuts most Rwandans out of bank credit
              </h2>
              {"\n"}
            </div>
            {"\n"}
            <div className="problem__grid">
              {"\n"}
              <div className="problem__prose">
                {"\n"}
                <p>
                  Traditional lending in Rwanda focuses almost entirely on tangible assets like land or buildings, shutting out the majority of citizens and small traders who lack formal collateral.
                </p>
                {"\n"}
                <p>
                  That forces creditworthy people into high-interest informal lenders, or blocks them from the capital needed for business growth, emergencies, or home improvement.
                </p>
                {"\n"}
                <p>
                  The launch of EMMA signals that banks themselves acknowledge this broken system.
                </p>
                {"\n"}
              </div>
              {"\n"}
              <div className="problem__evidence">
                {"\n"}
                <p className="evidence__label">
                  Evidence points
                </p>
                {"\n"}
                <ul className="evidence">
                  {"\n"}
                  <li className="evidence__item">
                    Traditional lending in Rwanda focuses almost entirely on tangible assets like land or buildings, shutting out the majority of citizens and small traders who lack formal collateral.
                  </li>
                  {"\n"}
                  <li className="evidence__item">
                    This forces creditworthy people into high-interest informal lenders or blocks them from accessing capital needed for business growth, emergencies, or home improvement.
                  </li>
                  {"\n"}
                  <li className="evidence__item">
                    The launch of EMMA signals that banks themselves acknowledge this broken system.
                  </li>
                  {"\n"}
                </ul>
                {"\n"}
              </div>
              {"\n"}
            </div>
            {"\n"}
            <p className="attribution">
              {"Research by StartupTribunal · "}
              <a href="https://startuptribunal.com/catalog/rwandans-without-collateral-denied-bank-loans">
                startuptribunal.com
              </a>
            </p>
            {"\n"}
            <p className="caveat">
              {facts.F4}
            </p>
            {"\n"}
          </div>
          {"\n"}
        </section>
        {"\n"}
        <section className="features" id="features" aria-labelledby="features-title">
          {"\n"}
          <div className="container">
            {"\n"}
            <div className="section-head">
              {"\n"}
              <p className="eyebrow">
                What it does
              </p>
              {"\n"}
              <h2 id="features-title">
                Four features, the team’s own concept
              </h2>
              {"\n"}
              <p className="section-note">
                These four features are the team’s own concept, not research claims: a working prototype whose data stays on this device.
              </p>
              {"\n"}
            </div>
            {"\n"}
            <div className="features__grid">
              {"\n"}
              <article className="feature">
                {"\n"}
                <svg className="feature__icon" viewBox="0 0 48 48" aria-hidden="true" focusable="false">
                  {"\n"}
                  <circle cx="24" cy="24" r="18" fill="none" stroke="currentColor" strokeWidth="2.5"></circle>
                  {"\n"}
                  <path d="M24 24 L34 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"></path>
                  {"\n"}
                  <circle cx="24" cy="24" r="2.5" fill="currentColor"></circle>
                  {"\n"}
                </svg>
                {"\n"}
                <h3>
                  Score
                </h3>
                {"\n"}
                <p>
                  Enter one small trader’s cashflow, operating history, repayment record, and trade volume, and receive a risk score with an approve, decline, or refer recommendation.
                </p>
                {"\n"}
              </article>
              {"\n"}
              <article className="feature">
                {"\n"}
                <svg className="feature__icon" viewBox="0 0 48 48" aria-hidden="true" focusable="false">
                  {"\n"}
                  <path d="M10 12 H38 V36 H10 Z" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"></path>
                  {"\n"}
                  <path d="M10 12 L24 24 L38 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"></path>
                  {"\n"}
                </svg>
                {"\n"}
                <h3>
                  Save
                </h3>
                {"\n"}
                <p>
                  Commit the scored trader to this device and reopen any saved decision later to see the same inputs and score without re-entry.
                </p>
                {"\n"}
              </article>
              {"\n"}
              <article className="feature">
                {"\n"}
                <svg className="feature__icon" viewBox="0 0 48 48" aria-hidden="true" focusable="false">
                  {"\n"}
                  <rect x="8" y="14" width="14" height="20" rx="2" fill="none" stroke="currentColor" strokeWidth="2.5"></rect>
                  {"\n"}
                  <rect x="26" y="14" width="14" height="20" rx="2" fill="none" stroke="currentColor" strokeWidth="2.5"></rect>
                  {"\n"}
                  <line x1="24" y1="10" x2="24" y2="38" stroke="currentColor" strokeWidth="2.5" strokeDasharray="3 3"></line>
                  {"\n"}
                </svg>
                {"\n"}
                <h3>
                  Compare
                </h3>
                {"\n"}
                <p>
                  Select two saved decisions and view them side by side, with differing fields highlighted, so an inconsistent decline can be spotted and overturned.
                </p>
                {"\n"}
              </article>
              {"\n"}
              <article className="feature">
                {"\n"}
                <svg className="feature__icon" viewBox="0 0 48 48" aria-hidden="true" focusable="false">
                  {"\n"}
                  <line x1="10" y1="38" x2="38" y2="38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"></line>
                  {"\n"}
                  <rect x="12" y="26" width="6" height="12" fill="currentColor"></rect>
                  {"\n"}
                  <rect x="21" y="18" width="6" height="20" fill="currentColor"></rect>
                  {"\n"}
                  <rect x="30" y="22" width="6" height="16" fill="currentColor"></rect>
                  {"\n"}
                </svg>
                {"\n"}
                <h3>
                  Batch summary
                </h3>
                {"\n"}
                <p>
                  See a weekly batch summary: a count of approve, decline, and refer decisions for the current week, so the risk officer sees the team’s pattern at a glance.
                </p>
                {"\n"}
              </article>
              {"\n"}
            </div>
            {"\n"}
          </div>
          {"\n"}
        </section>
        {"\n"}
        <section className="caveats" id="caveats" aria-labelledby="caveats-title">
          {"\n"}
          <div className="container">
            {"\n"}
            <div className="section-head">
              {"\n"}
              <p className="eyebrow">
                Caveats
              </p>
              {"\n"}
              <h2 id="caveats-title">
                What this is not
              </h2>
              {"\n"}
            </div>
            {"\n"}
            <ul className="caveats__list">
              {"\n"}
              <li>
                No live data feed.
              </li>
              {"\n"}
              <li>
                No server.
              </li>
              {"\n"}
              <li>
                No loan disbursement.
              </li>
              {"\n"}
              <li>
                No multi-user sync.
              </li>
              {"\n"}
              <li>
                All data stays on this device.
              </li>
              {"\n"}
            </ul>
            {"\n"}
          </div>
          {"\n"}
        </section>
        {"\n"}
        <section className="source" id="source" aria-labelledby="source-title">
          {"\n"}
          <div className="container">
            {"\n"}
            <div className="section-head">
              {"\n"}
              <p className="eyebrow">
                Source
              </p>
              {"\n"}
              <h2 id="source-title">
                Research by StartupTribunal
              </h2>
              {"\n"}
            </div>
            {"\n"}
            <p className="source__line">
              {"Research by StartupTribunal: "}
              <a href="https://startuptribunal.com/catalog/rwandans-without-collateral-denied-bank-loans">
                Rwandans Without Collateral Denied Bank Loans
              </a>
              .
            </p>
            {"\n"}
            <p className="caveat">
              {facts.F4}
            </p>
            {"\n"}
          </div>
          {"\n"}
        </section>
        {"\n"}
        <section className="scorer" id="scorer" aria-labelledby="scorer-title">
          {"\n"}
          <div className="container">
            {"\n"}
            <div className="section-head">
              {"\n"}
              <p className="eyebrow">
                The scorer
              </p>
              {"\n"}
              <h2 id="scorer-title">
                Count one small trader’s cash
              </h2>
              {"\n"}
            </div>
            {"\n"}
            <Scorer />
            {"\n"}
          </div>
          {"\n"}
        </section>
        {"\n"}
        <section className="decisions" id="decisions" aria-labelledby="decisions-title">
          {"\n"}
          <div className="container">
            {"\n"}
            <div className="section-head">
              {"\n"}
              <p className="eyebrow">
                Decisions
              </p>
              {"\n"}
              <h2 id="decisions-title">
                Saved decisions on this device
              </h2>
              {"\n"}
            </div>
            {"\n"}
            <Decisions />
            {"\n"}
          </div>
          {"\n"}
        </section>
        {"\n"}
        <section className="compare" id="compare" aria-labelledby="compare-title">
          {"\n"}
          <div className="container">
            {"\n"}
            <div className="section-head">
              {"\n"}
              <p className="eyebrow">
                Compare
              </p>
              {"\n"}
              <h2 id="compare-title">
                Compare two saved decisions
              </h2>
              {"\n"}
            </div>
            {"\n"}
            <Compare />
            {"\n"}
          </div>
          {"\n"}
        </section>
        {"\n"}
      </main>
      {"\n"}
      <footer className="site-footer">
        {"\n"}
        <div className="container">
          {"\n"}
          <p className="site-footer__brand">
            Trust Ledger · a working prototype
          </p>
          {"\n"}
          <p className="site-footer__credit">
            {"Research by StartupTribunal · "}
            <a href="https://startuptribunal.com/catalog/rwandans-without-collateral-denied-bank-loans">
              startuptribunal.com
            </a>
          </p>
          {"\n"}
          <p className="site-footer__status">
            {facts.F4}
          </p>
          {"\n"}
        </div>
        {"\n"}
      </footer>
    </>
  );
}
