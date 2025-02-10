import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Mail, Send} from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const data = {
      name,
      contact,
      message,
    };
    
    try {
      const response = await fetch('http://localhost:3003/api/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("Сообщение отправлено!");
        setName("");
        setContact("");
        setMessage("");
      } else {
        throw new Error("Ошибка при отправке сообщения.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Ошибка при отправке сообщения.");
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-primary to-[#221F26]">
      <div className="container mx-auto px-4 py-16 animate-fadeIn">
        <h1 className="text-6xl font-bold text-accent mb-12">Связь со мной</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-white">Социальные сети</h2>
            <p className="text-gray-200 mb-8">
              Мне всегда интересно узнать о новых проектах и возможностях.
              Не стесняйтесь обращаться ко мне через форму обратной связи или через мои профили в социальных сетях.
            </p>
            <div className="space-y-4 ">
              <a
                href="https://github.com/Pel1x1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-accent transition-colors"
              >
                <Github className="mr-2 h-5 w-5" />
                github.com/Pel1x1
              </a>
              <a
                href="https://t.me/k_k0stya"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-accent transition-colors"
              >
                <Send className="mr-2 h-5 w-5" />
                t.me/k_k0stya
              </a>
              <a
                href="mailto:k.konstantin2212@gmail.com"
                className="flex items-center text-gray-300 hover:text-accent transition-colors"
              >
                <Mail className="mr-2 h-5 w-5" />
                k.konstantin2212@gmail.com
              </a>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Имя</label>
                <Input 
                  id="name" 
                  placeholder="Ваше имя" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                />
              </div>
              <div>
                <label htmlFor="contact" className="block text-sm font-medium text-gray-400 mb-1">Куда вам ответить</label>
                <Input 
                  id="contact" 
                  type="text" 
                  placeholder="email или ссылка" 
                  value={contact} 
                  onChange={(e) => setContact(e.target.value)} 
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Сообщение</label>
                <Textarea 
                  id="message" 
                  placeholder="Ваше сообщение" 
                  className="min-h-[150px]" 
                  value={message} 
                  onChange={(e) => setMessage(e.target.value)} 
                />
              </div>
              <Button type="submit" className="w-full bg-primary/40">Отправить</Button>
              {status && <p className="mt-4 text-green-500">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
