
CREATE TABLE t_user(
  user_id 			int				NOT NULL	AUTO_INCREMENT,
  user_name         varchar(255),
  user_email 		varchar(255)	NOT NULL,
  user_password 	varchar(255)	NOT NULL,
  user_steam_id  	varchar(255),
    
  PRIMARY KEY (user_id)    
)

CREATE TABLE t_item(
  item_id 			int				NOT NULL	AUTO_INCREMENT,
  item_name     varchar(255)	NOT NULL,
  item_value 		float			NOT NULL,
  item_image    longblob,
    
  PRIMARY KEY (item_id)      
)


CREATE TABLE t_team(
  team_id 			int				NOT NULL	AUTO_INCREMENT,
  team_name         varchar(255)	NOT NULL,
  team_image        longblob,
    
  PRIMARY KEY (team_id) 
)


CREATE TABLE t_user_inventory(
  user_inventory_id int				NOT NULL AUTO_INCREMENT,
  user_id  			    int       NOT NULL,
  item_id			      int       NOT NULL,
    
  PRIMARY KEY (user_inventory_id),  
  CONSTRAINT fk_user_inventory_user_id FOREIGN KEY(user_id) REFERENCES t_user(user_id), 
  CONSTRAINT fk_user_inventory_item_id FOREIGN KEY(item_id) REFERENCES t_item(item_id)  
)


CREATE TABLE t_match(
  match_id 			int		NOT NULL AUTO_INCREMENT,
  match_description varchar(255),  
  team_id_1  		int		NOT NULL,
  team_id_2			int		NOT NULL,
  PRIMARY KEY (match_id),
  CONSTRAINT fk_match_team_id_1 FOREIGN KEY(team_id_1) REFERENCES t_team(team_id)
  CONSTRAINT fk_match_team_id_2 FOREIGN KEY(team_id_2) REFERENCES t_team(team_id)
)

CREATE TABLE t_match_bets(
  match_bets_id 	int		NOT NULL AUTO_INCREMENT,
  match_id			int		NOT NULL,
  user_id			int		NOT NULL,
  item_id			int 	NOT NULL,  
  PRIMARY KEY (match_bets_id),
  CONSTRAINT fk_match_bets_match_id FOREIGN KEY(match_id) REFERENCES t_match(match_id), 
  CONSTRAINT fk_match_bets_user_id FOREIGN KEY(user_id) REFERENCES t_user(user_id),
  CONSTRAINT fk_match_bets_item_id FOREIGN KEY(item_id) REFERENCES t_item(item_id) 
)
