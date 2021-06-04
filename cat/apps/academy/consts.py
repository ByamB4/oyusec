ACADEMY_COMING = 'coming'
ACADEMY_ARCHIVE = 'archive'
ACADEMY_LIVE = 'live'

ACADEMY_STATUS_CHOICES = (
    (ACADEMY_COMING, 'coming'),
    (ACADEMY_ARCHIVE, 'archive'),
    (ACADEMY_LIVE, 'live')
)

ACADEMY_CATEGORY_CTF = 'Capture The Flag'
ACADEMY_CATEGORY_NETWORK = 'Сүлжээний аюулгүй байдал'
ACADEMY_CATEGORY_WEB = 'Веб аюулгүй байдал'
ACADEMY_CATEGORY_CODING = 'Аюулгүй кодчилол'

ACADEMY_CATEGORY_CHOICES = (
    (ACADEMY_CATEGORY_CTF, 'Capture The Flag'),
    (ACADEMY_CATEGORY_NETWORK, 'Сүлжээний аюулгүй байдал'),
    (ACADEMY_CATEGORY_WEB, 'Веб аюулгүй байдал'),
    (ACADEMY_CATEGORY_CODING, 'Аюулгүй кодчилол'),
)

# FAKE DATA
FAKE_ACADEMY_NAME = 'Кибер аюулгүй байдал'
FAKE_ACADEMY_DESCRIPTION = 'This course will give you a good start on how to start in the cyber security field'
FAKE_ACADEMY_IMAGES = [
    'https://s27389.pcdn.co/wp-content/uploads/2017/05/AdobeStock_133109484-1024x903.jpeg', 'https://www.alliedtelesis.com/sites/default/files/cyber-security-blog-min.jpg', 'https://www.dotmagazine.online/_Resources/Persistent/1090f59b08e4d1a1365b53517b609265227eb6a8/iStock-690772190%20web-720x405.jpg', 'https://www.cm-alliance.com/hubfs/CIPR-Course-Thumbnail.jpg', 'https://www.networkerstechnology.com/sites/networkers/files/wysiwyg/images/articles/large-image/security-web.jpg', 'https://www.immuniweb.com/images/events/top10-cybersecurity-predictions-webinar.jpg', 'https://shuftipro.com/wp-content/uploads/blogimage.png', 'https://www.stockvault.net/data/2019/11/12/270508/preview16.jpg', 'https://www.immuniweb.com/images/blog/state-cybersecurity-dark-web-exposure/state-of-cybersecurity-industy-exposure-at-darkweb.jpg', 'https://www.securitymagazine.com/ext/resources/Default-images/Responsive-Defaults/cyber6-900px.jpg?t=1472739458&width=696']

FAKE_SECTION_NAME = 'Танилцуулга'
FAKE_SECTION_CONTENT = ["""
        <h1>What are Cookies?</h1>
        <p class="mt-5">
          Cookies are data, browsers store it in small text files, on your
          computer. Cookies were invented to solve the problem "how to remember
          information about the user". When you sign in a web application like
          cybertalents you won’t need to type your email and password again next
          time because it stores your credentials in cookies
        </p>
        <code>username = user</code>
        <p class="mt-5">
          When a browser requests a web page from a server, cookies belonging to
          the page are added to the request. This way the server gets the
          necessary data to "remember" information about users.
        </p>
        <p class="mt-5">With JavaScript, a cookie can be created like this:</p>
        <img
          src="https://lh5.googleusercontent.com/fmHhRWnTHVfcr9O_yINFFS-QKBxBWk0xwt5PA8ATPpHYRUrthvIA0lQiE_XZk2zr_pWI3naT6Prw6fvNNCE0tF5AxCabSmDG5kdcSH_VK2YxwOa7NzuGch7KCk1Tw4i8rGCrb-0"
        />
        <p class="mt-5">
          You can also add an expiry date (in UTC time). By default, the cookie
          is deleted when the browser is closed:
        </p>
        <img
          src="https://lh4.googleusercontent.com/gydIOJNzTBA6K24t-F8DeqtfET8V5kUE4wSVie6QeVybcvwD74N9ICzqAOn-ik-gIRJFwitDrWxa_Ak1DFGDJ9ewNHiwP0TZvzBfOxsasnJZ6sb69N6xJGJrLEb9tyvBd6b3xrg"
        />
        <p class="mt-5">
          With a path parameter, you can tell the browser what path the cookie
          belongs to. By default, the cookie belongs to the current page.
        </p>
      </div>
""", """
        <h1>What is Directory Traversal?</h1>
        <p class="mt-5">
          Web vulnerability that aims to access data stored outside the web
          application root folder .This vulnerability can allow an attacker to
          even access the source code of the application.
        </p>
        <p class="mt-5">
          You should check if there are any request parameters that could be
          used for file related operations.
        </p>
        <code>http://example.com/getUserProfile.php?item=up.html</code>
        <p class="mt-5">
          To successfully test for this vulnerability , you need to have
          knowledge of the system being tested and the location of the files
          being requested.
        </p>
        <code
          >http://example.com/getUserProfile.php?item=../../../../etc/passwd</code
        >
        <p class="mt-5">
          You can also add an expiry date (in UTC time). By default, the cookie
          is deleted when the browser is closed:
        </p>
        <img
          src="https://lh4.googleusercontent.com/a8VYIjv6DDVkyreQ0RaWCNW3ywl85w5EmcZhgOVMNJ0NHrB1L3VrLVatWbkB1eaWpZhNXLt0XnLNI3ENUsm1foouKtIY82mnXezmx9sxxiHJ4hLtt7vUdf_QNW3IZUTyg20AUsA"
        />
        <p class="mt-5">
          <strong>include()</strong> this function includes the specified file
          in the php code , e.g you can have two php files and with include
          function you can use the code written in the other file.
        </p>
""", """
<h2>Анализ</h2><p>Бидэнд <strong>elf</strong> файл өгөгдөх бөгөөд <code>rabin</code> команд ашиглаж үзэх юм бол доорх байдалтай харагдаж байна.</p><p><img src="https://raw.githubusercontent.com/oyusec/OyuSec-CTF/master/Writeup/%D0%A3%D1%80%D1%82%20%D1%88%D0%B0%D0%BB%D0%B3%D0%B0%D0%BB%D1%82/2.png" alt="img"></p><p>Статик бинари буюу файл c++ хэл дээр бичигдсэн байна. Азаар <code>stripped</code> бинари биш учир <code>symbol</code> ууд шууд харагдах юм. Бид IDA дээр нээж үзвэл асар их <strong>if</strong> буюу нөхцөл шалгах зүйл байх юм, нэмэлтээр <strong>random</strong> функц ашиглаж санамсаргүй тоо үүсгэж байна. </p><p><img src="https://raw.githubusercontent.com/oyusec/OyuSec-CTF/master/Writeup/%D0%A3%D1%80%D1%82%20%D1%88%D0%B0%D0%BB%D0%B3%D0%B0%D0%BB%D1%82/3.png" alt="a"></p><h2>Бодолт</h2><p>Үүнийг <strong>статик</strong> байдлаар <code>script</code> бичиж бодвол оновчтой бөгөөд. Бид дараах алхмуудыг гүйцэтгэх юм.</p><ol><li><p><strong>seed</strong> өгч санамсаргүй тоо үүсгэнэ.</p></li><li><p><strong>z3</strong> ашиглаж нөхцөлийг хангасан <code>script</code> бичнэ.</p></li></ol><p><img src="https://raw.githubusercontent.com/oyusec/OyuSec-CTF/master/Writeup/%D0%A3%D1%80%D1%82%20%D1%88%D0%B0%D0%BB%D0%B3%D0%B0%D0%BB%D1%82/4.png" alt="a"></p><p>Дараагаар нь бид <strong>z3 script</strong> бичих юм бол</p><p><img src="https://raw.githubusercontent.com/oyusec/OyuSec-CTF/master/Writeup/%D0%A3%D1%80%D1%82%20%D1%88%D0%B0%D0%BB%D0%B3%D0%B0%D0%BB%D1%82/5.png" alt="5"></p><p>Бүтэн код энэхүү <a href="https://github.com/oyusec/OyuSec-CTF/blob/master/Writeup/%D0%A3%D1%80%D1%82%20%D1%88%D0%B0%D0%BB%D0%B3%D0%B0%D0%BB%D1%82/sol.py" rel="noopener noreferrer nofollow">линк</a> ээс харагдана. Кодыг ажиллуулах юм бол бид флагаа авах юм.</p><p><code>flag{cYb3r_74L3n7_0R_cY83r_PuNk}</code></p><p>Энэхүү <strong>writeup </strong>нь туршилтын байдлаар харуулсан болно :')</p>
"""
                        ]
FAKE_SECTION_QUESTION = "CTF бүтэн нэршил юу вэ ?"
FAKE_SECTION_HINT = "Том жижиг үсэг хамаатай"
FAKE_SECTION_ANSWER = 'Capture The Flag'
