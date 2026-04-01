import trackImage from '../../assets/images/track.jpeg';

export default function Tracking() {
  return (
    <div className="min-h-screen pt-20" style={{ backgroundImage: `url(${trackImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="min-h-[80vh] flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
        <div className="max-w-xl w-full bg-card/95 backdrop-blur-xl p-12 rounded-3xl shadow-2xl space-y-8 border border-border">
          <div className="text-center space-y-2">
            <h2 className="text-4xl font-black uppercase tracking-tighter">Track Order</h2>
            <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">Real-time Delivery Status</p>
          </div>
          <div className="space-y-4">
            <input type="text" placeholder="Order ID (e.g. AG-12345)" className="w-full px-6 py-5 bg-gray-100/50 border-2 border-transparent focus:border-rose-600 rounded-2xl outline-none transition-all font-black text-rose-600 placeholder:text-gray-400" />
            <button className="w-full py-5 bg-rose-600 text-white text-xs font-black uppercase tracking-[0.3em] rounded-2xl hover:bg-black transition-all transform active:scale-95">Initiate Search</button>
          </div>
          <p className="text-center text-[10px] text-gray-400 font-black uppercase tracking-widest">Check your email for tracking credentials</p>
        </div>
      </div>
    </div>
  );
}
