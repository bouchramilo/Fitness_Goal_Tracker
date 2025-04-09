export default function Contact() {
    return (
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Contactez-nous</h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <label className="block text-text mb-2">Nom</label>
                <input 
                  type="text"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-text mb-2">Email</label>
                <input 
                  type="email"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-text mb-2">Message</label>
                <textarea
                  className="resize-none w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  rows="4"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-primary hover:bg-accent text-white font-bold py-3 px-6 rounded-lg transition"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </section>
    )
  }