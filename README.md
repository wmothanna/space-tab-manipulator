I made this project for the sake of ending the war :fire::crossed_swords::fire: between two ancient tribes :neckbeard:tabbers and :neckbeard:spacers ...
ok enough, this is simple a converter from spaces to tabs and vice versa.
it is fairly simple to use.
let me show you ...

<img src="/images/space-to-tab-screenshot.png" alt="app screenshot" width="500" />
<img src="/images/tab-to-space-screenshot.png" alt="app screenshot" width="500" />

To validate conversion use this command
`hexdump -C <target-file> | grep -E '09|20'`
`09` is the hex of tab
`20` is the hex of space

for exampe here i converted `dummy.c` spaces to tabs:
hex before conversion:

<img src="//images/with-spaces-screenshot.png" alt="validation screenshot" width="500" />

hex After conversion:

<img src="/images/with-tabs-screenshot.png" alt="validation screenshot" width="500" />
