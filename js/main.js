const projectsDiv = document.getElementById("projectmain")

fetch('https://developer-portfolio-server.vercel.app/projects')
.then(res => res.json())
.then(data =>{
    data.map(p => projectsDiv.innerHTML+=`
        <div class="card relative bg-neutral rounded-md  hover:scale-[1.03] duration-150">
                <div class="flex text-neutral items-center gap-5 rounded-xl p-1 ">
                    <div class="cardcontent">
                        <img class=" rounded-2xl" src="${p.image}" alt="">
                        <div class="">
                            <h2 class="text-blackston font-bold text-wrap text-center text-md">${p.title}</h2>
                        <div>
                    </div>
                </div>
            </div>
            <div class="bg-white absolute right-3 top-3 text-2xl text-blackston px-2 flex items-center gap-3 rounded-full border-[1px] border-primary">
                <a title="Code link" href="${p.codelink}" class="text-primary" target="_blank"><i class="fa-brands fa-github"></i></a>
                <a title="Live link" href="${p.demolink}" class="text-primary" target="_blank"><i class="fa-solid fa-link"></i></a>
            </div>
        </div>
        `)
})