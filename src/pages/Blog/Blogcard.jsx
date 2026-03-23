import React from "react";
function Blogcard(){
    const cards=[
        {
      id: 1,
      category: "AI Development",
      readTime: "5 MIN READ",
      title : "Building Scalable Apps with Codeofy",
      description : "Learn how to leverage our latest SDKs to build robust AI features in under 10 minutes.",
      author : "Sarah Chen",
      date: "Oct 20, 2023",
      img: "https://betanews.com/wp-content/uploads/2024/07/AI-developer.jpg",
      img2:"https://t4.ftcdn.net/jpg/03/69/19/81/360_F_369198116_K0sFy2gRTo1lmIf5jVGeQmaIEibjC3NN.jpg"
    },
      {
      id: 2,
      category: "TUTORIALS",
      readTime: "7 MIN READ",
      title: "Announcing Codeofy v2.0",
      description:
        "A look into our biggest update yet: more context,faster completion, and local execution.",
      author: "Elena Gilbert",
      date: "Nov 12, 2023",
      img: "https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?semt=ais_rp_progressive&w=740&q=80",
      img2:"https://t4.ftcdn.net/jpg/03/69/19/81/360_F_369198116_K0sFy2gRTo1lmIf5jVGeQmaIEibjC3NN.jpg"
    },
    {
      id: 3,
      category: "TUTORIALS",
      readTime: "4 MIN READ",
      title: "Future of LLMs in DevOps",
      description: "How large language models are automating deployment pipelines and error handling.",
      author: "Jordan Smith",
      date: "Dec 5, 2023",
      img: "https://www.shutterstock.com/image-vector/devops-icon-made-binary-code-600nw-2501939331.jpg",
      img2:"https://t4.ftcdn.net/jpg/03/69/19/81/360_F_369198116_K0sFy2gRTo1lmIf5jVGeQmaIEibjC3NN.jpg"
    },
]
    return(
  <div className="grid md:grid-cols-3 gap-6 p-7 bg-linear-to-br from-blue-100 to-blue-100">
      {cards.map((item) => (
        <div
          key={item.id}
          className="bg-blue-50 rounded-3xl shadow-lg overflow-hidden"
        >
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-40 object-cover"
          />

          <div className="p-5">
            <div className="flex justify-between text-sm text-blue-600 font-semibold">
              <span>{item.category}</span>
              <span className="text-gray-500">{item.readTime}</span>
            </div>

            <h2 className="text-xl font-bold mt-3">{item.title}</h2>

            <p className="text-gray-600 mt-2 text-sm">
              {item.description}
            </p>

            <div className="flex items-center mt-4">
              <img
                src={item.img2}
                alt=""
                className="w-8 h-8 rounded-full mr-2"
              />
              <div>
                <p className="text-sm font-semibold">{item.author}</p>
                <p className="text-xs text-gray-500">{item.date}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    )
}
export default Blogcard;