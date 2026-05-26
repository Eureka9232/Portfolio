export default function Contacts() {
  return (
    <section id="contacts" className="py-20">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-6">Контакты</h2>
        <p className="text-slate-600 mb-10">
          Свяжитесь со мной любым удобным способом или отправьте письмо.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-md mx-auto">
          <div className="p-4 bg-white border rounded-lg">
            <div className="text-xs text-slate-400">Email</div>
            <div className="font-medium">gagoh@gmail.com</div>
          </div>
          <div className="p-4 bg-white border rounded-lg">
            <div className="text-xs text-slate-400">Telegram</div>
            <div className="font-medium">@Eureka555</div>
          </div>
        </div>
      </div>
    </section>
  );
}