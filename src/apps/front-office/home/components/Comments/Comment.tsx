import React from "react";
import { CommentWrapper, UserWrapper } from "./style";
import {
  P4,
  Small,
} from "apps/front-office/design-system/components/Typography";
import { Flex } from "apps/front-office/design-system/components/Grids";
import { StarsIcon } from "shared/assets/svgs";

const Comment = ({ comment }) => {
  return (
    <CommentWrapper>
      <StarsIcon />
      <P4 className="comment">{comment.comment}</P4>
      <UserWrapper>
        <Flex gap="20px" className="description">
          {comment.image}
          <Flex direction="column">
            <P4 weight="700">{comment.userName}</P4>
            <Small color="#666">{comment.commentType}</Small>
          </Flex>
        </Flex>
      </UserWrapper>
    </CommentWrapper>
  );
};

export default Comment;
