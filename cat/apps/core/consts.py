from apps.competition.consts import *

AUTHENTICATION_REQUIRED = "Та эхлээд нэвтэрнэ үү"
ACCESS_DENIED = "Таны эрх хүрэхгүй байна"

SUCCESS = 'Амжилттай'
SUCCESS_UPDATED = "Амжилттай шинэчлэлээ"
SUCCESS_ADD = "Амжилттай нэмэгдлээ"
WE_WILL_CHECK = "Бид шалгаж үзээд нэмэх болно"
SUCCESS_DELETED = "Амжилттай хасагдлаа"

SOMETHING_WRONG = 'Алдаа гарлаа'

USER_TYPE_NORMAL = "normal"
USER_TYPE_ADMIN = "admin"

USER_TYPE_CHOICES = (
    (USER_TYPE_NORMAL, "normal"),
    (USER_TYPE_ADMIN, "admin"),
)




# Fake data

# Mostly user related
FAKE_ADMIN = 'admin'
FAKE_ADMIN_EMAIL = 'admin@zxc.zxc'
FAKE_USER_USERNAME = 'fake'
FAKE_GUEST_USERNAME = 'guest'
FAKE_GUEST_EMAIL = 'guest@zxc.zxc'
FAKE_PASSWORD = 'tmppass123'

# Mostly competition related
FAKE_COMPETITION_NAME = 'OyuSec'
FAKE_COMPETITION_DESCRIPTION = """For the first time, Taif University organizes an online cybersecurity Capture The Flag (CTF) competition. This competition is a side-event to the 4th National Conference for Computing Colleges (4th NCCC 2021), which is organized by the College of Computers and Information Technology at Taif University from March 27th to March 28th, 2021. The CTF hacking competition starts on the first day of the conference from 03:00 PM to 11:00 PM. \n\nThe competition will be a Jeopardy Style CTF where every team will have a list of challenges in different categories like Reverse Engineering, Web Security, Digital Forensics, Network Security and others. For every challenge solved, the team will get a certain amount of points depending on the difficulty of the challenge. The team who will get the highest score at the end of the day will be the winning team."""
FAKE_COMPETITION_RULE = """- Sharing the flags between different teams is prohibited.\n- Brute Force attacks on the challenges submission portal or challenges links are not allowed.\n- Any attack against the site or the hosted servers will be observed and the player will be banned from participating in the CTF immediately.\n- Organizers have the permission to disqualify teams for any unethical behavior or any trials to interrupt the CTF."""
FAKE_COMPETITION_PRIZE = """- $XXX\n- $YYY\n- $ZZZ"""
FAKE_COMPETITION_CHALLENGE_NAME = 'Hidden Message'
FAKE_IMAGES = [
    'https://raw.githubusercontent.com/oyusec/OyuSec-CTF/master/public/img/thumbnail-oyusec-contest-1.png']
FAKE_STATUS = [COMPETITION_LIVE, COMPETITION_ARCHIVE, COMPETITION_COMING]
FAKE_COMPETITION_LOCATIONS = ['онлайн', 'дэлхийд', 'монголд', 'хөдөө']

# Mostly related challenges
FAKE_CHALLENGE_NAME = 'Cyber Anxiety'
FAKE_REQCHALLENGE_NAME = 'Will add'
FAKE_CHALLENGE_CATEGORIES = ['Reverse engineering', 'Miscellaneous',
                             'Forensics', 'Cryptography', 'Binary exploitation', 'Web']
FAKE_CHALLENGE_DESCRIPTION = """RSA encryption is modular exponentiation of a message with an exponent `e` and a modulus `N` which is normally a product of two primes: `N = p * q`.

Together the exponent and modulus form an RSA "public key" `(N, e)`. The most common value for e is `0x10001` or `65537`.

> This is fake data, flag{thisisdemo}

[download](https://google.com)
"""
FAKE_SOLUTION = 'Use strings'

FAKE_FLAG = 'flag{thisisdemo}'

# Mostly related writeup
FAKE_WRITEUP_NAME = 'tamuctf / 2021 / reverse / can you ?'
FAKE_WRITEUP_CONTENT = """
<h2>Анализ</h2><p>Бидэнд <strong>elf</strong> файл өгөгдөх бөгөөд <code>rabin</code> команд ашиглаж үзэх юм бол доорх байдалтай харагдаж байна.</p><p><img src="https://raw.githubusercontent.com/oyusec/OyuSec-CTF/master/Writeup/%D0%A3%D1%80%D1%82%20%D1%88%D0%B0%D0%BB%D0%B3%D0%B0%D0%BB%D1%82/2.png" alt="img"></p><p>Статик бинари буюу файл c++ хэл дээр бичигдсэн байна. Азаар <code>stripped</code> бинари биш учир <code>symbol</code> ууд шууд харагдах юм. Бид IDA дээр нээж үзвэл асар их <strong>if</strong> буюу нөхцөл шалгах зүйл байх юм, нэмэлтээр <strong>random</strong> функц ашиглаж санамсаргүй тоо үүсгэж байна. </p><p><img src="https://raw.githubusercontent.com/oyusec/OyuSec-CTF/master/Writeup/%D0%A3%D1%80%D1%82%20%D1%88%D0%B0%D0%BB%D0%B3%D0%B0%D0%BB%D1%82/3.png" alt="a"></p><h2>Бодолт</h2><p>Үүнийг <strong>статик</strong> байдлаар <code>script</code> бичиж бодвол оновчтой бөгөөд. Бид дараах алхмуудыг гүйцэтгэх юм.</p><ol><li><p><strong>seed</strong> өгч санамсаргүй тоо үүсгэнэ.</p></li><li><p><strong>z3</strong> ашиглаж нөхцөлийг хангасан <code>script</code> бичнэ.</p></li></ol><p><img src="https://raw.githubusercontent.com/oyusec/OyuSec-CTF/master/Writeup/%D0%A3%D1%80%D1%82%20%D1%88%D0%B0%D0%BB%D0%B3%D0%B0%D0%BB%D1%82/4.png" alt="a"></p><p>Дараагаар нь бид <strong>z3 script</strong> бичих юм бол</p><p><img src="https://raw.githubusercontent.com/oyusec/OyuSec-CTF/master/Writeup/%D0%A3%D1%80%D1%82%20%D1%88%D0%B0%D0%BB%D0%B3%D0%B0%D0%BB%D1%82/5.png" alt="5"></p><p>Бүтэн код энэхүү <a href="https://github.com/oyusec/OyuSec-CTF/blob/master/Writeup/%D0%A3%D1%80%D1%82%20%D1%88%D0%B0%D0%BB%D0%B3%D0%B0%D0%BB%D1%82/sol.py" rel="noopener noreferrer nofollow">линк</a> ээс харагдана. Кодыг ажиллуулах юм бол бид флагаа авах юм.</p><p><code>flag{cYb3r_74L3n7_0R_cY83r_PuNk}</code></p><p>Энэхүү <strong>writeup </strong>нь туршилтын байдлаар харуулсан болно :')</p>
```python
from itertools import cycle
from secret import key, flag

assert len(key) == 3

def enc(m):
    ctext = []
    for i, j in zip(m, cycle(key)): ctext.append(chr((ord(i) + ord(j)) % 95 + ord(' ')))
    return ''.join(ctext)

with open('enc.txt', 'w') as f:
    f.write(enc(flag))
```

> enc.txt
"""
FAKE_REACTIONS = ['like', 'dislike']
