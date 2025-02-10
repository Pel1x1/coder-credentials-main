const About = () => {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-primary to-[#221F26] text-white ">
      <div className="container mx-auto px-4 py-16 animate-fadeIn">
        <h1 className="text-6xl font-bold text-accent mb-8">Обо мне</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-semibold mb-4">Начало</h2>
            <p className="text-gray-400 mb-8">
            Я — full-stack разработчик с более чем двухлетним опытом в создании веб-приложений.<br></br>
            Моя страсть к программированию началась с раннего возраста, и с тех пор я стремлюсь создавать красивые и функциональные решения, которые помогают пользователям в их повседневной жизни.
            </p>
            <h2 className="text-4xl font-semibold mb-4">Образование</h2>
            <ul className="space-y-4">
            <li>
                <h3 className="font-semibold">Программная инженерия</h3>
                <p className="text-gray-400">РТУ Мирэа - 2028</p>
              </li>
              <li>
                <h3 className="font-semibold">Разработчки программного обеспечения</h3>
                <p className="text-gray-400">TOP IT Academy - 2024</p>
              </li>
              <li>
                <h3 className="font-semibold">Программирование на C++</h3>
                <p className="text-gray-400">C++ Institute - 2022</p>
              </li>
              <li>
                <h3 className="font-semibold">Основы IT</h3>
                <p className="text-gray-400">Cisco Networking Academy - 2021</p>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-4xl font-semibold mb-4">Опыт</h2>
            <p className="text-gray-400 mb-8">
            Мой опыт охватывает широкий спектр технологий и инструментов, включая Python, JavaScript, C# и C++. 
            Люблю работать как с frnt-end, так и с back-end, что позволяет мне создавать полноценные веб-приложения от начала до конца. 
            <br></br>Открыт для новых вызовов, стремлюсь к постоянному обучению, остаюсь на передовой технологий.
            </p>
            <h2 className="text-4xl font-semibold mb-4">Интересы</h2>
            <ul className="space-y-4">
              <li>
                <p className="text-gray-400">
                Когда я не занимаюсь программированием, вы можете найти меня на футбольном поле или в тренажёрном зале, где наслаждаюсь активным отдыхом. 
                <br></br>Увлекаюсь таеквон-до, КМС и призёр чемпионата России.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;