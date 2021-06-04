
# User Challenge
USER_CHALLENGE_STATUS_SOLVED = "solved"
USER_CHALLENGE_STATUS_AUTHOR = "author"
USER_CHALLENGE_STATUS_UNSOLVED = "unsolved"
USER_CHALLENGE_STATUS_ATTEMPTED = "attempted"

USER_CHALLENGE_STATUS_CHOICES = (
    (USER_CHALLENGE_STATUS_AUTHOR, 'Нэмсэн'),
    (USER_CHALLENGE_STATUS_SOLVED, "Бодсон"),
    (USER_CHALLENGE_STATUS_UNSOLVED, "Бодоогүй"),
    (USER_CHALLENGE_STATUS_ATTEMPTED, "Оролдлого хийсэн"),
)

TYPE_DYNAMIC = 'dynamic'
TYPE_STANDARD = 'standard'

STATE_VISIBLE = "visible"
STATE_HIDDEN = "hidden"
STATE_LOCKED = "locked"

STATE_CHOICES = (
    (STATE_VISIBLE, "visible"),
    (STATE_HIDDEN, "hidden"),
    (STATE_LOCKED, "locked")
)

COMPETITION_STATE_ACTIVE = 'active'
COMPETITION_STATE_PAUSE = 'pause'
COMPETITION_STATE_END = 'end'

COMPETITION_CHOICES = (
    (COMPETITION_STATE_ACTIVE, "active"),
    (COMPETITION_STATE_PAUSE, "pause"),
    (COMPETITION_STATE_END, "end")
)

REACTION_LIKE = 'like'
REACTION_DISLIKE = 'dislike'

REACTION_CHOICES = (
    (REACTION_LIKE, 'like'),
    (REACTION_DISLIKE, 'dislike')
)

AUTHOR_CHALLENGE = 'Та энэ бодлогыг нэмсэн байна'
ALREADY_SOLVED = 'Та бодсон байна'
NOT_SOLVED = 'Та бодоогүй байна'
NOT_FOUND = 'Олдсонгүй'
INCORRECT = 'Буруу байна'

# Mongolian

STATE_VISIBLE_MN = "Ил харагдана"
STATE_HIDDEN_MN = "Нууцлагдмал"
STATE_LOCKED_MN = "Түгжигдсэн"

TYPE_DYNAMIC_MN = 'динамик'
TYPE_STANDARD_MN = 'стандарт'

SUBMISSION_CORRECT_MN = 'Зөв байна'
SUBMISSION_WRONG_MN = 'Буруу байна'
