package engteach.user.repository;

import engteach.user.entity.User;

/**
 * @author codeofwhite
 * @date 2024/6/26
 * @Description
 */
public interface UserRepository {
    User validateUser(String userEmail, String userPassword);

    void register(String userName, String userEmail, String userPassword);
}
