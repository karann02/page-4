import ProfileFrame from "../components/ProfileFrame";
import VirtualConsultationTextNode from "../components/VirtualConsultationTextNode";
import GroupComponent from "../components/GroupComponent";
import "./EditInvoice.css";

const EditInvoice = () => {
  return (
    <div className="edit-invoice">
      <ProfileFrame />
      <main className="finance-text-node">
        <VirtualConsultationTextNode />
        <section className="overview-frame">
          <div className="profile-frame">
            <div className="appointments-frame">
              <div className="history-frame">
                <h1 className="invoice">Invoice</h1>
                <h1 className="invoice-list">Invoice list</h1>
              </div>
              <div className="add-discount-button">
                <button className="rectangle-parent">
                  <div className="frame-child" />
                  <div className="add-discount">{`Add Discount `}</div>
                </button>
              </div>
            </div>
            <div className="text-input-for-message">
              <div className="support-section">
                <img className="aftercare-section-icon" loading="lazy" alt="" />
                <div className="video-player">
                  <div className="video-player-child" />
                  <div className="frequently-asked-questions">
                    <div className="instructions-text">
                      <div className="health-assessment-form">
                        <h1 className="edit-invoice1">Edit Invoice</h1>
                        <h1 className="custom-invoice-layout">{`custom Invoice layout editing `}</h1>
                      </div>
                    </div>
                    <div className="total-tax-text" />
                  </div>
                  <div className="rectangle-group">
                    <div className="frame-item" />
                    <div className="summery-parent">
                      <div className="summery">SUMMERY</div>
                      <img className="frame-inner" loading="lazy" alt="" />
                    </div>
                    <img
                      className="skinclublogo-logotype-white-2-icon"
                      loading="lazy"
                      alt=""
                      src="/skinclublogo-logotype-white-2@2x.png"
                    />
                    <div className="summary-frame">
                      <div className="doctor-profile">
                        <div className="dr-vihang">Dr. Vihang</div>
                        <div className="jane-doe">Jane Doe</div>
                      </div>
                    </div>
                    <div className="rectangle-container">
                      <div className="rectangle-div" />
                      <div className="frame-div">
                        <div className="frame-child1" />
                        <div className="item-wrapper">
                          <div className="item">item</div>
                        </div>
                        <div className="rate">Rate</div>
                        <div className="qty">Qty</div>
                        <div className="amount">Amount</div>
                      </div>
                      <div className="frame-wrapper">
                        <div className="vitamin-a-night-serum-parent">
                          <div className="vitamin-a-night">
                            Vitamin A Night Serum
                          </div>
                          <div className="vitamin-a-serum">
                            <div className="div">$90</div>
                            <div className="div1">2</div>
                          </div>
                          <div className="div2">$180</div>
                        </div>
                      </div>
                      <div className="frame-container">
                        <div className="vitamin-a-night-serum-group">
                          <div className="vitamin-a-night1">
                            Vitamin A Night Serum
                          </div>
                          <div className="parent">
                            <div className="div3">$90</div>
                            <div className="div4">2</div>
                          </div>
                          <div className="div5">$180</div>
                        </div>
                      </div>
                      <div className="frame-wrapper1">
                        <div className="vitamin-a-night-serum-container">
                          <div className="vitamin-a-night2">
                            Vitamin A Night Serum
                          </div>
                          <div className="group">
                            <div className="div6">$90</div>
                            <div className="div7">2</div>
                          </div>
                          <div className="div8">$180</div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-parent">
                      <div className="subtotal-frame-wrapper">
                        <div className="subtotal-frame">
                          <div className="subtotal-node">
                            <div className="subtotal">Subtotal</div>
                            <div className="tax-5">tax 5%</div>
                            <div className="discount-10">Discount 10%</div>
                          </div>
                          <div className="subtotal-node1">
                            <div className="div9">$540.00</div>
                            <div className="div10">$00.00</div>
                            <div className="div11">$00.00</div>
                          </div>
                        </div>
                      </div>
                      <div className="line-separator" />
                      <div className="notes-frame">
                        <div className="total-amount-frame">
                          <div className="total">total</div>
                          <div className="total-label">$540.00</div>
                        </div>
                      </div>
                    </div>
                    <div className="group-elements">
                      <div className="group-elements-child" />
                      <div className="search-node">
                        <div className="notesterms">Notes/Terms</div>
                      </div>
                      <input
                        className="lorem-ipsum-dolor"
                        placeholder="Lorem ipsum dolor sit amet. Sit eaque assumenda qui."
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="color-picker">
                <div className="color-picker-child" />
                <div className="background-frame">
                  <h3 className="template-elements">Template Elements</h3>
                  <div className="vector-arrow">
                    <div className="wrapper-group-179">
                      <input
                        className="wrapper-group-179-child"
                        placeholder="Search by patient name"
                        type="text"
                      />
                      <img
                        className="templates-group-icon"
                        alt=""
                        src="/vector-1.svg"
                      />
                      <img
                        className="wrapper-group-179-item"
                        alt=""
                        src="/line-19.svg"
                      />
                    </div>
                    <img
                      className="template-group-icon"
                      alt=""
                      src="/vector-2.svg"
                    />
                  </div>
                </div>
                <div className="total-frame">
                  <div className="search-frame">
                    <GroupComponent
                      imageBackground="/image-background.svg"
                      templates="Templates"
                    />
                    <button className="group-button">
                      <div className="frame-child2" />
                      <div className="layout-shapes">
                        <img
                          className="frame-frame-icon"
                          alt=""
                          src="/frame-1.svg"
                        />
                        <div className="layout">Layout</div>
                      </div>
                    </button>
                  </div>
                  <div className="search-frame1">
                    <GroupComponent
                      imageBackground="/frame-2.svg"
                      templates="Assests"
                      propPadding="var(--padding-mid) var(--padding-base) var(--padding-lg)"
                      templatesDisplay="inline-block"
                    />
                    <div className="group-div">
                      <div className="frame-child3" />
                      <img
                        className="layer-1-icon"
                        loading="lazy"
                        alt=""
                        src="/layer-1.svg"
                      />
                      <h3 className="color">Color</h3>
                    </div>
                  </div>
                  <div className="search-frame2">
                    <button className="rectangle-parent1">
                      <div className="frame-child4" />
                      <div className="background">Background</div>
                      <img className="frame-icon" alt="" src="/frame-3.svg" />
                    </button>
                    <button className="rectangle-parent2">
                      <div className="frame-child5" />
                      <div className="frame-group">
                        <img
                          className="frame-icon1"
                          alt=""
                          src="/frame-4.svg"
                        />
                        <div className="shapes">Shapes</div>
                      </div>
                    </button>
                  </div>
                  <div className="search-frame3">
                    <button className="rectangle-parent3">
                      <div className="frame-child6" />
                      <div className="images-parent">
                        <div className="images">Images</div>
                        <img
                          className="layout-group-icon"
                          alt=""
                          src="/frame-5.svg"
                        />
                      </div>
                    </button>
                    <button className="rectangle-parent4">
                      <div className="frame-child7" />
                      <div className="frame-parent1">
                        <img
                          className="frame-icon2"
                          alt=""
                          src="/frame-6.svg"
                        />
                        <div className="icons">Icons</div>
                      </div>
                    </button>
                  </div>
                  <div className="signature-field">
                    <h3 className="signature">Signature</h3>
                    <textarea className="rectangle-shape" rows={5} cols={16} />
                  </div>
                </div>
                <button className="button-frame">
                  <div className="button-frame-child" />
                  <div className="save-send">{`Save & Send`}</div>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default EditInvoice;
