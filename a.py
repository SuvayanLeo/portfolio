import json
import os
import requests


# load videos.json
with open('videos.json') as f:
    videos = json.load(f)

# print(videos)
# loop through videos
for video in videos:
    for item in video['videos']:
        # get id from item['url']
        id = item['url'].split('/')[-1].split('?')[1].split('=')[1]
        # downlaod thumbnail in /img/video/video_id.jpg
        img = requests.get("https://i.ytimg.com/vi/" + id + "/hqdefault.jpg")
        with open(os.path.join('img/video/', id + '.jpg'), 'wb') as f:
            f.write(img.content)
        item['thumbnail'] = 'img/video/' + id + '.jpg'

# save videos.json
with open('videos.json', 'w') as f:
    json.dump(videos, f, indent=4)
