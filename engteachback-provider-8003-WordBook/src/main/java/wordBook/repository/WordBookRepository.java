package wordBook.repository;

import java.util.List;

/**
 * @author codeofwhite
 * @date 2024/6/26
 * @Description
 */
public interface WordBookRepository {
    void insertUnknown(String user_email, String word_name);

    List<String> selectUnknown(String user_email);

    void insertMastered(String user_email, String word_name);

    List<String> selectMastered(String user_email);
}
