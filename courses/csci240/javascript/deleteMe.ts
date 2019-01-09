/**
 * Created by DennisMarchuk on 4/23/2018.
 */


package hxgstudio.compliplenty;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

public class Profile extends AppCompatActivity {


    @Override
    protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    setContentView(R.layout.activity_profile);

    Button editProfile, contacts, viewLikeList;

    editProfile = (Button) findViewById(R.id.icon_settings);
    contacts = (Button) findViewById(R.id.icon_contacts);
    viewLikeList = (Button) findViewById(R.id.icon_likelist);

    editProfile.setOnClickListener(new View.OnClickListener() {
public void onClick(View v) {
        Toast.makeText(Profile.this, "Edit Profile", Toast.LENGTH_SHORT).show();
    }
});

    contacts.setOnClickListener(new View.OnClickListener() {
public void onClick(View v) {
        Intent intent;
        intent = new Intent(Profile.this, ContactsList.class);
        Profile.this.startActivity(intent);
    }
});

//        final Intent profileToLikeList = new Intent (this, LikeList.class);
//        viewLikeList.setOnClickListener(new View.OnClickListener() {
//            public void onClick(View v) {
//                String putExtraHelper;
//                ArrayList<String> listOfLikes = new ArrayList<String>();
//                for(int i = 0; i < listOfLikes.size(); i++) {
//                    putExtraHelper = "Compliment ";
//                    putExtraHelper = putExtraHelper + i;
//                    profileToLikeList.putExtra(putExtraHelper, "" + listOfLikes.get(i));
//                }
//                Toast.makeText(Profile.this, "Likeeee List", Toast.LENGTH_SHORT).show();
//                Intent intent;
//                intent = new Intent(Profile.this, LikeList.class);
//                Profile.this.startActivity(intent);            }
//        });

    viewLikeList.setOnClickListener(new View.OnClickListener() {
public void onClick(View v) {
        Intent intent;
        intent = new Intent(Profile.this, LikeList.class);
        Profile.this.startActivity(intent);
    }
});

}
}



































































package hxgstudio.compliplenty;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.Toast;

import java.util.ArrayList;

public class LikeList extends AppCompatActivity {
    ListView likeListView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_like_list);

    String quote = getIntent().getStringExtra("quote");
    Toast.makeText(LikeList.this, quote, Toast.LENGTH_SHORT).show();//TODO

    likeListView = (ListView) findViewById(R.id.likeListView);

    ArrayList<String> arrayOfLikes = new ArrayList<String>();
    ArrayList<String> allQuotes = new ArrayList<String>();
    Bundle extraGetter = getIntent().getExtras();

    allQuotes.add(allQuotes.size(), quote);

    int amountOfLikes = 15;

    if(extraGetter != null) {
    String getExtraHelper;
    for(int i = 0; i < amountOfLikes; i++) {
    getExtraHelper = "Liked ";
    getExtraHelper = getExtraHelper + i;
    arrayOfLikes.add(getExtraHelper);
}
}

String addQuote;
addQuote = quote;

for(int x = 14; x < amountOfLikes; x++){
    arrayOfLikes.add(addQuote);

    x++;
}


ArrayAdapter<String> likeListAdapter = new ArrayAdapter<String>(this, android.R.layout.simple_list_item_1, android.R.id.text1, arrayOfLikes);

likeListView.setAdapter(likeListAdapter);





likeListView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
@Override
public void onItemClick(AdapterView<?> adapterView, View view, int position, long id) {
        int likePosition = position++;
        String compliment = (String) likeListView.getItemAtPosition(position);

        Toast.makeText(getApplicationContext(), "Position: " + likePosition + "\tCompliment: " + compliment, Toast.LENGTH_LONG).show();
    }
});
}
}
