## Unit Assignment: Music Playlist Explorer

Submitted by: **Dijon Miller**

Estimated time spent: **#22** hours spent in total

Deployed Application (**required**): [Music Playlist Explorer Deployed Site](https://brainrot-spotify.onrender.com)

### Application Features

#### CORE FEATURES

- [x] **Display Playlists**
  - [x] Dynamically render playlists on the homepage using JavaScript.
    - [x] Playlists should be shown in grid view.
    - [x] Playlist images should be reasonably sized (at least 6 playlists on your laptop when full screen; large enough that the playlist components detailed in the next feature are legible).
  - [x] Fetch data from a provided Javascript file and use it to create interactive playlist tiles.

- [x] **Playlist Components**
  - [x] Each tile should display the playlist's:
    - [x] Cover image
    - [x] Name
    - [x] Author
    - [x] Like count

- [x] **Playlist Details**
  - [x] Create a modal pop-up view that displays detailed information about a playlist when a user clicks on a playlist tile.
  - [x] The modal should show the playlist's:
    - [x] Cover image
    - [x] Name
    - [x] Author
    - [x] List of songs, including each song's:
      - [x] Title
      - [x] Artist
      - [x] Duration
  - [x] The modal itself should:
    - [x] Not occupy the entire screen.
    - [x] Have a shadow to show that it is a pop-up.
    - [x] Appear floating on the screen.
    - [x] The backdrop should appear darker or in a different shade.

- [x] **Like Playlists**
  - [x] Implement functionality to allow users to like playlists by clicking a heart icon on each playlist tile.
  - [x] When the heart icon is clicked:
    - [x] If previously unliked:
      - [x] The like count on the playlist tile should increase by 1.
      - [x] There should be visual feedback (such as the heart turning a different color) to show that the playlist has been liked by the user.
    - [x] If previously liked:
      - [x] The like count on the playlist tile should decrease by 1.
      - [x] There should be visual feedback (such as the heart turning a different color) to show that the playlist has been unliked by the user.
    - [x] **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS:** In addition to showcasing the above features, for ease of grading, please film yourself liking and unliking:
      - [x] a playlist with a like count of 0
      - [x] a playlist with a non-zero like count

- [x] **Shuffle Songs**
  - [x] Enable users to shuffle the songs within a playlist using a shuffle button in the playlist's detail modal.
  - [x] When the shuffle button is clicked, the playlist's songs should display in a different order.
  - [x] **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS:** In addition to showcasing the above features, for ease of grading, please show yourself shuffling the same playlist more than once.

- [x] **Featured Page**
  - [x] Application includes a dedicated page that randomly selects and displays a playlist, showing the playlist’s:
    - [x] Playlist Image
    - [x] Playlist Name
    - [x] List of songs, including each song's:
      - [x] Title
      - [x] Artist
      - [x] Duration
  - [x] When the page is refreshed or reloaded, a new random playlist is displayed
    - For example, navigating to the all playlists page and then back to the featured playlist page should result in a new random playlist being displayed
    - Note that because your algorithm will not be truly random, it is possible that the same playlist will feature twice in a row.
    - [x] **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS:** In addition to showcasing the above features, for ease of grading, please show yourself refreshing the featured page more than once.
  - [x] Application includes a navigation bar or some other mechanism such that users can navigate to the page with all playlists from the featured page and vice versa without using the browser's back and forward buttons.

#### STRETCH FEATURES

- [ ] **Add New Playlists**
  - [ ] Allow users to create new playlists.
  - [ ] Using a form, users can input playlist:
    - [ ] Name
    - [ ] Author
    - [ ] Cover image
    - [ ] Add one or more songs to the playlist, specifying the song's:
      - [ ] Title
      - [ ] Artist
  - [ ] The resulting playlist should display in the grid view.
  - [ ] **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS:** For ease of grading, please show yourself adding at least two songs to the playlist.

- [ ] **Edit Existing Playlists**
  - [ ] Enable users to modify the details of existing playlists.
  - [ ] Add an edit button to each playlist tile.
  - [ ] Users can update the playlist:
    - [ ] Name
    - [ ] Author
    - [ ] Songs
  - [ ] The playlist grid view and playlist detail modal should update to display any changes (see Required Features, Criterion 1 & 2).
  - [ ] **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS:** For ease of grading, please show yourself:
    - [ ] Editing all of a playlist's features (name, creator, AND songs)
    - [ ] Editing some of a playlist's features (name, creator, OR songs)

- [x] **Delete Playlists**
  - [x] Add a delete button to each playlist tile within the grid view.
  - [x] When clicked, the playlist is removed from the playlist grid view.

- [x] **Search Functionality**
  - [x] Implement a search bar that allows users to filter playlists by:
    - [x] Name
    - [ ] Author
  - [ ] The search bar should include:
    - [x] Text input field
    - [ ] Submit/Search Button
    - [ ] Clear Button
  - [x] Playlists matching the search query in the text input are displayed in a grid view when the user:
    - [x] Presses the Enter Key
    - [ ] Clicks the Submit/Search Button
  - [ ] User can click the clear button. When clicked:
    - [ ] All text in the text input field is deleted
    - [x] All playlists in the `data.json` file are displayed in a grid view
    - [ ] **Optional:** If the Add Playlist, Edit Existing Playlist, or Delete Playlist stretch features were implemented:
      - [] If users can add a playlist, added playlists should be included in search results.
      - [ ] If users can edit a playlist, search results should reflect the latest edits to each playlist.
      - [x] If users can delete a playlist, deleted playlists should no longer be included in search results.
      - **Note:** You will not be graded on the implementation of this optional subfeature to keep your grade of this stretch feature independent of your implementation of other stretch features. However, we highly suggest including this in your implementation to model realistic behavior of real applications.

- [x] **Sorting Options**
  - [x] Implement a drop-down or button options that allow users to sort the playlist by:
    - [x] Name (A-Z alphabetically)
    - [x] Number of likes (descending order)
    - [x] Date added (most recent to oldest, chronologically)
  - [x] Selecting a sort option should result in a reordering based on the selected sort while maintaining a grid view.

### Walkthrough Video

`TODO://` Add the embedded URL code to your animated app walkthrough below, `https://www.loom.com/share/c3adbf3cffbc4f9fbd337df50d849a4f?sid=73ac4e49-c0aa-4fee-9665-0c888df27f5e`. Make sure the video actually renders and is playable when viewing this README. Ensure your walkthrough showcases the presence and/or functionality of all features you implemented above (check them off as you film!). Pay attention to any **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS** checkboxes listed above to ensure graders see the full functionality of your website! (🚫 Remove this paragraph after adding walkthrough video)

`https://www.loom.com/share/c3adbf3cffbc4f9fbd337df50d849a4f?sid=73ac4e49-c0aa-4fee-9665-0c888df27f5e`

### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?
Yes, the labs helped me to complete all of the core features. Going to the stretch features, it gave me a great foundation, but would require more time to learn additional things to present a good quality functional feature.

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.

I would structure my code better, reduce redudancy, improve logic, handle requests better and design better. I also believe I would be able to finish all of the stretch features and unstand them completely.

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

In the end, I fixed all of the known bugs, there are still  things that probably don't work in test cases I haven't tried. Next time my peer pedro added a cool feature where you can select the delete button and choose which playlist you want to delete instead of it being fixed on each playlist. I would like to try that next time!

### Open-source libraries used

- Add any links to open-source libraries used in your project.

### Shout out

Give a shout out to somebody from your cohort that especially helped you during your project. This can be a fellow peer, instructor, TA, mentor, etc.

### Shout out to: Pedro Ribeiro
### Shout out to: Braden Jones
