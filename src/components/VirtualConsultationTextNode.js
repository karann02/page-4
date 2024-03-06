import "./VirtualConsultationTextNode.css";

const VirtualConsultationTextNode = () => {
  return (
    <div className="virtual-consultation-text-node">
      <div className="virtual-consultation-text-node-child" />
      <div className="invoice-text-node">
        <h2 className="overview2">Overview</h2>
      </div>
      <div className="invoice-text-node1">
        <h2 className="profile2">Profile</h2>
      </div>
      <div className="invoice-text-node2">
        <h2 className="appointments1">Appointments</h2>
      </div>
      <div className="invoice-text-node3">
        <h2 className="history1">History</h2>
      </div>
      <div className="invoice-text-node4">
        <div className="videos-parent">
          <h3 className="videos1">Videos</h3>
          <h3 className="videos-library1">Videos Library</h3>
        </div>
      </div>
      <div className="invoice-text-node5">
        <h2 className="messages1">Messages</h2>
      </div>
      <div className="invoice-text-node6">
        <h2 className="support1">Support</h2>
      </div>
      <div className="invoice-text-node7">
        <div className="faqs-parent">
          <h3 className="faqs1">FAQ’s</h3>
          <h3 className="procedure-information1">Procedure Information</h3>
        </div>
      </div>
      <div className="invoice-text-node8">
        <h2 className="aftercare1">Aftercare</h2>
      </div>
      <div className="invoice-text-node9">
        <h3 className="quizzes1">Quizzes</h3>
        <h3 className="health-skin1">{`Health & Skin Assesment`}</h3>
      </div>
      <div className="total-amount-text-node">
        <div className="notes-terms-text-node">
          <h2 className="finances1">Finances</h2>
        </div>
        <button className="search-by-name-vector">
          <div className="search-by-name-vector-child" />
          <div className="virtual-consultation1">Virtual Consultation</div>
        </button>
      </div>
    </div>
  );
};

export default VirtualConsultationTextNode;
