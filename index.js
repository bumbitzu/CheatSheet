function openCloseNav()
{
  const openBtn = document.getElementById('openbtn');
  const sidebar = document.getElementById("mySidebar");
  const inputContainer = document.getElementById('input-container')
  const mainContent = document.getElementById("main");

  if (sidebar.style.width === "0px" || sidebar.style.width === "")
  {
    sidebar.style.width = "400px";
    mainContent.style.marginLeft = "400px";
    openBtn.innerText = `☰ Hide Menu`;
    
    setTimeout(() =>
    {
      inputContainer.style.position = 'fixed';
    },400)
  } else
  {
    sidebar.style.width = "0px";
    mainContent.style.marginLeft = "0px";
    openBtn.innerText = `☰ Show Menu`;
    inputContainer.style.position = '';
  }

}

function myFunction()
{
  var input, filter, menu, li, i, txtValue;
  input = document.getElementById('mySearch');
  filter = input.value.toUpperCase(); // Transformă textul în majuscule pentru a face căutarea case-insensitive
  menu = document.getElementById('myMenu');
  li = menu.getElementsByTagName('li'); // Obține toate elementele p din meniu

  // Iterează prin toate elementele p și ascunde cele care nu corespund cu căutarea
  for (i = 0; i < li.length; i++)
  {
    txtValue = li[ i ].textContent || li[ i ].innerText; // Obține textul elementului p
    if (txtValue.toUpperCase().indexOf(filter) > -1)
    {
      li[ i ].style.display = ""; // Afișează elementele care corespund
    } else
    {
      li[ i ].style.display = "none"; // Ascunde elementele care nu corespund
    }
  }
}

function adaugaDivDeasupraPre()
{
  // Găsește toate elementele <pre> din document
  const preElements = document.querySelectorAll('pre');
  
  // Parcurge fiecare element <pre>
  preElements.forEach(function (pre)
  {
    // Creează un nou element <div>
    const newDiv = document.createElement('div');
    // (Opțional) Adaugă conținut sau clase la noul div, de exemplu:
    newDiv.textContent = ''; // Text de exemplu
    newDiv.className = 'codeHead'; // Adaugă o clasă pentru stilizare
    newDiv.innerHTML = '<p class="copy"><i class="fa-regular fa-copy"></i> Copy code</p>';
    // Inserează noul div înaintea elementului <pre> curent
    pre.parentNode.insertBefore(newDiv, pre);
  });
}
function clicked(element)
{
  
  var items = document.querySelectorAll('ul li');
  items.forEach((item) =>
  {
    item.style.color = '#818181'
    item.style.backgroundColor = '#171717ff' 
  })
  element.style.color = '#f1f1f1';
  element.style.backgroundColor = '#212121ff';
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}
function render(file_path = 'WELCOME.md')
{
  fetch(file_path)
    .then(response => response.text())
    .then(markdown =>
    {
      // Converteste Markdown în HTML
      var converter = new showdown.Converter();
      var html = converter.makeHtml(markdown);
      // Afișează HTML-ul în pagina
      console.log(html);
      document.getElementById('markdownContent').innerHTML = html;
      Prism.highlightAll();
      adaugaDivDeasupraPre();
    })
    .catch(error =>
    {
      console.error('Eroare la încărcarea fișierului Markdown:', error);
      document.getElementById('markdownContent').textContent = 'Eroare la încărcarea conținutului.';
    });
}

document.addEventListener('click', function (e)
{
  // Verifică dacă elementul click-ului este iconița de copiere
  const i = e.target
  const paragraf = i.parentNode;
  if (i.classList.contains('fa-copy'))
  {
    // Găsește elementul <pre> corespunzător, presupunând că <i> este întotdeauna în interiorul unui <p> care este direct în interiorul unui <div> care precede direct un <pre>
    const codeElement = i.closest('.codeHead').nextElementSibling.querySelector('code');
    
    // Verifică dacă a fost găsit un element <code>
    if (codeElement)
    {
      // Copiază textul din <code> în clipboard
      navigator.clipboard.writeText(codeElement.textContent).then(() =>
      {
        console.log('Codul a fost copiat în clipboard!');
        const originalColor = paragraf.style.color;

        paragraf.innerHTML = '<i class="fa-regular fa-copy"></i> Copied!';
        paragraf.style.color = 'green';
        
        setTimeout(() =>
        {
          paragraf.innerHTML = `<i class="fa-regular fa-copy"></i> Copy code`;
          paragraf.style.color = originalColor;
        },3000)
      }).catch(err =>
      {
        console.error('Eroare la copierea în clipboard: ', err);
      });
    }
  }
});
